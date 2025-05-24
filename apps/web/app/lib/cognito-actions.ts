import { redirect } from "next/navigation";
import {
  signUp,
  confirmSignUp,
  signIn,
  signOut,
  resendSignUpCode,
} from "aws-amplify/auth";
import { getErrorMessage } from "../utils/get-error-message";
import { useRouter } from "next/navigation";

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

    if (isSignUpComplete) {
      return "/dash";
    } else {
      return "/auth"; 
    }
  } catch (error) {
    return getErrorMessage(error);
  }
}

export async function handleSignIn(
  prevState: string | undefined,
  formData: FormData
): Promise<string | null> {
  let redirectLink = "/dash";
  try {
    const { isSignedIn, nextStep } = await signIn({
      username: String(formData.get("email")),
      password: String(formData.get("password")),
    });
    if (nextStep.signInStep === "CONFIRM_SIGN_UP") {
      await resendSignUpCode({
        username: String(formData.get("email")),
      });
      redirectLink = "/auth/confirm-signup";
    }
    return redirectLink;
  } catch (error) {
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