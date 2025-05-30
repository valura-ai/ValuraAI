"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  handleSignIn,
  handleVerifyTOTPSetup,
  handleConfirmTOTP,
} from "../lib/cognito-actions";
import { ForgotPassword } from "./ForgotPassword";
import { WelcomeSection } from "./shared/WelcomeSection";
import { TOTPSetupForm } from "./sign-in/TOTPSetupForm";
import { TOTPRequiredForm } from "./sign-in/TOTPRequiredForm";
import { SignInForm } from "./sign-in/SignInForm";

interface SignInBoxProps {
  onSignUpClick: () => void;
}

type MFAState = {
  type: "TOTP_SETUP" | "TOTP_REQUIRED" | null;
  data: any;
};

export const SignInBox = ({ onSignUpClick }: SignInBoxProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [totpCode, setTotpCode] = useState("");
  const [mfaState, setMfaState] = useState<MFAState>({
    type: null,
    data: null,
  });
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const router = useRouter();

  const handleSubmit = async () => {
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);

      const result = await handleSignIn(undefined, formData);

      if (typeof result === "string") {
        if (result.startsWith("/")) {
          router.push(result);
        } else {
          setError(result);
        }
      } else {
        setMfaState(result as MFAState);
      }
    } catch (error) {
      console.error("Sign in error:", error);
      setError(
        error instanceof Error
          ? error.message
          : "Failed to sign in. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleTOTPSubmit = async () => {
    if (!totpCode) {
      setError("Please enter the TOTP code");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("code", totpCode);

      if (mfaState.type === "TOTP_SETUP") {
        formData.append("email", mfaState.data.email);
        formData.append("password", password);
      }

      let result;
      if (mfaState.type === "TOTP_SETUP") {
        result = await handleVerifyTOTPSetup(formData);
      } else {
        result = await handleConfirmTOTP(formData);
      }

      if (typeof result === "string") {
        if (result.startsWith("/")) {
          router.push(result);
        } else {
          console.error("TOTP verification error:", result);
          setError(result);
        }
      }
    } catch (error) {
      console.error("TOTP verification error:", error);
      setError(
        error instanceof Error
          ? error.message
          : "Failed to verify TOTP code. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid grid-cols-2">
        <WelcomeSection 
          isForgotPassword={showForgotPassword} 
          onBack={() => {
            if (showForgotPassword) {
              setShowForgotPassword(false);
            } else {
              router.push("/");
            }
          }}
        />
        <div className="w-full max-w-md">
          <div className="bg-white rounded-3xl shadow-2xl p-8">
            {showForgotPassword ? (
              <ForgotPassword onBack={() => setShowForgotPassword(false)} />
            ) : mfaState.type === "TOTP_SETUP" ? (
              <TOTPSetupForm
                mfaState={mfaState}
                totpCode={totpCode}
                setTotpCode={setTotpCode}
                handleTOTPSubmit={handleTOTPSubmit}
                loading={loading}
                error={error}
              />
            ) : mfaState.type === "TOTP_REQUIRED" ? (
              <TOTPRequiredForm
                totpCode={totpCode}
                setTotpCode={setTotpCode}
                handleTOTPSubmit={handleTOTPSubmit}
                loading={loading}
                error={error}
              />
            ) : (
              <SignInForm
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                rememberMe={rememberMe}
                setRememberMe={setRememberMe}
                loading={loading}
                error={error}
                handleSubmit={handleSubmit}
                setShowForgotPassword={setShowForgotPassword}
                onSignUpClick={onSignUpClick}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
