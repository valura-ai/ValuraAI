import { redirect } from "next/navigation";
import {
  signUp,
  confirmSignUp,
  signIn,
  signOut,
  resendSignUpCode,
  confirmSignIn,
} from "aws-amplify/auth";
import { getErrorMessage } from "../utils/get-error-message";

export async function handleSignUp(formData: FormData): Promise<string | null> {
  try {
    const givenName = String(formData.get("firstName"));
    const familyName = String(formData.get("lastName"));
    const email = String(formData.get("email"));
    const password = String(formData.get("password"));

    const { isSignUpComplete, userId, nextStep } = await signUp({
      username: email,
      password,
      options: {
        userAttributes: {
          email,
          given_name: givenName,
          family_name: familyName,
        },
        autoSignIn: true,
      },
    });
    return null;
  } catch (error) {
    return getErrorMessage(error);
  }
}

export async function handleSendEmailVerificationCode(
  prevState: { message: string; errorMessage: string },
  formData: FormData
) {
  let currentState;
  try {
    await resendSignUpCode({
      username: String(formData.get("email")),
    });
    currentState = {
      ...prevState,
      message: "Verification code sent successfully",
    };
  } catch (error) {
    currentState = {
      ...prevState,
      errorMessage: getErrorMessage(error),
    };
  }

  return currentState;
}

export async function handleConfirmSignUp(
  prevState: string | undefined,
  formData: FormData
): Promise<string | null> {
  try {
    const { isSignUpComplete, nextStep } = await confirmSignUp({
      username: String(formData.get("email")),
      confirmationCode: String(formData.get("code")),
    });

    return "/auth"; 
    
  } catch (error) {
    return getErrorMessage(error);
  }
}

export async function handleSignIn(
  prevState: string | undefined,
  formData: FormData
): Promise<string | { type: string; data: any }> {
  try {
    console.log("Starting sign in process...");
    const username = String(formData.get("email"));
    const password = String(formData.get("password"));

    const { isSignedIn, nextStep } = await signIn({
      username,
      password,
    });

    if (nextStep.signInStep === "CONTINUE_SIGN_IN_WITH_TOTP_SETUP") {
      const otpAuthUrl = `otpauth://totp/AWSCognito:${username}?secret=${nextStep.totpSetupDetails.sharedSecret}&issuer=Cognito`;
      return { 
        type: "TOTP_SETUP", 
        data: {
          otpAuthUrl,
          email: username,
          sharedSecret: nextStep.totpSetupDetails.sharedSecret,
        }
      };
    }

    if (nextStep.signInStep === "CONFIRM_SIGN_IN_WITH_TOTP_CODE") {
      return { type: "TOTP_REQUIRED", data: null };
    }

    if (nextStep.signInStep === "CONFIRM_SIGN_UP") {
      await resendSignUpCode({ username });
      return "/auth/confirm-signup";
    }

    if (isSignedIn) {
      console.log("Sign in completed successfully");
      return "/dash";
    }

    throw new Error(`Sign in failed: ${nextStep.signInStep}`);
  } catch (error) {
    console.error("Detailed sign in error:", {
      error,
      message: error instanceof Error ? error.message : "Unknown error",
      stack: error instanceof Error ? error.stack : undefined
    });
    return getErrorMessage(error);
  }
}

export async function handleVerifyTOTPSetup(
  formData: FormData
): Promise<string | null> {
  try {
    const code = String(formData.get("code"));
    const { isSignedIn, nextStep } = await confirmSignIn({ 
      challengeResponse: code 
    });
    
    if (isSignedIn) {
      return "/dash";
    } else {
      throw new Error(`Unexpected state after TOTP setup: ${nextStep.signInStep}`);
    }
    
  } catch (error) {
    console.error("TOTP setup verification error:", error);
    return getErrorMessage(error);
  }
}

export async function handleConfirmTOTP(
  formData: FormData
): Promise<string | null> {
  try {
    const code = String(formData.get("code"));
    const { isSignedIn, nextStep } = await confirmSignIn({ 
      challengeResponse: code 
    });
    
    if (isSignedIn) {
      return "/dash";
    } else {
      throw new Error(`TOTP confirmation failed: ${nextStep.signInStep}`);
    }
  } catch (error) {
    console.error("TOTP confirmation error:", error);
    return getErrorMessage(error);
  }
}

export async function handleSignOut(): Promise<string> {
  try {
    await signOut();
  } catch (error) {
    console.log(getErrorMessage(error));
  }
  return "/auth";
}