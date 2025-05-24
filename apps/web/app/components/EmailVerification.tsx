import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { handleSendEmailVerificationCode, handleConfirmSignUp } from "../lib/cognito-actions";

interface EmailVerificationProps {
  email: string
}

export const EmailVerification = ({ email }: EmailVerificationProps) => {
  const [verificationCode, setVerificationCode] = useState("");
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const router = useRouter();

  const onSignInClick = () => {
    router.push("/auth")
  }

  const handleSendCode = async () => {
    setLoading(true);
    setError(null);
    setSuccessMessage(null);
    try {
      const formData = new FormData();
      formData.append("email", email);
      
      const result = await handleSendEmailVerificationCode({ message: "", errorMessage: "" }, formData);
      
      if (result.errorMessage) {
        setError(result.errorMessage);
      } else {
        setIsCodeSent(true);
        setSuccessMessage(result.message);
      }
    } catch (error) {
      setError("Failed to send verification code. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyCode = async () => {
    if (!verificationCode) {
      setError("Please enter the verification code");
      return;
    }

    setLoading(true);
    setError(null);
    setSuccessMessage(null);
    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("code", verificationCode);
      
      const result = await handleConfirmSignUp(undefined, formData);
      
      if (result) {
        if (result.startsWith("/")) {
          router.push(result);
        } else {
          setError(result);
        }
      }
    } catch (error) {
      setError("Failed to verify code. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center gap-32">
      <div className="flex flex-col items-center w-[25vw]">
        <div className="flex items-center mb-2 w-full">
          <div className="flex flex-col items-start mr-2">
            <h1 className="text-white mb-[-0.8rem] font-extralight text-3xl pl-2.5 self-start">
              Welcome to
            </h1>
            <img
              src="/valura-text.svg"
              alt="Valura"
              className="h-20 w-auto object-contain"
            />
          </div>
          <img
            src="/valura-logo.svg"
            alt="Valura Logo"
            className="h-24 mb-5 w-auto object-contain"
          />
        </div>
        <p className="text-white/80 pl-4 text-sm text-left w-full -mt-2">
          Create your account to access your personalized wealth management
          dashboard.
        </p>
        <div className="mt-2 w-full pl-4">
          <p className="text-white/80 text-sm mt-2 mb-4">
            Already have an account?
          </p>
          <button
            onClick={onSignInClick}
            className="bg-black/30 text-sm hover:bg-black/40 text-white px-6 py-2 rounded-3xl transition-all duration-200 border border-white/20"
          >
            Sign In
          </button>
        </div>
      </div>

      {/* White Rectangle with Verification Form */}
      <div className="bg-black/20 backdrop-blur-sm w-[28vw] h-auto min-h-[200px] py-9 px-9 rounded-2xl shadow-lg flex flex-col justify-center border border-white/20">
        {/* Email Input */}
        <div className="mb-4">
          <input
            type="email"
            id="email"
            className="w-full bg-white/13 border border-white/30 rounded-3xl px-4 py-2 text-white text-sm placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder={email}
            disabled
          />
        </div>

        {isCodeSent && (
          <div className="mb-4">
            <input
              type="text"
              id="code"
              className="w-full bg-white/13 border border-white/30 rounded-3xl px-4 py-2 text-white text-sm placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="Enter Verification Code"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              disabled={loading}
            />
          </div>
        )}

        {error && (
          <div className="mb-4 text-red-400 text-sm font-medium">{error}</div>
        )}

        {successMessage && (
          <div className="mb-4 text-green-400 text-sm font-medium">{successMessage}</div>
        )}

        {/* Main Action Button */}
        <button
          onClick={isCodeSent ? handleVerifyCode : handleSendCode}
          disabled={loading}
          className={`${
            loading ? "opacity-50 cursor-not-allowed" : ""
          } bg-gradient-to-r from-purple-700 to-cyan-600 text-white text-sm font-medium py-2 rounded-3xl transition-all duration-300`}
        >
          {loading 
            ? (isCodeSent ? "Verifying..." : "Sending Code...") 
            : (isCodeSent ? "Verify & Continue" : "Send Verification Code")}
        </button>

        {isCodeSent && (
          <button
            onClick={handleSendCode}
            disabled={loading}
            className="mt-4 w-full bg-white/13 border border-white/30 rounded-3xl px-4 py-2 text-white text-sm hover:bg-white/20 transition-all duration-200"
          >
            Resend Code
          </button>
        )}
      </div>
    </div>
  );
};
