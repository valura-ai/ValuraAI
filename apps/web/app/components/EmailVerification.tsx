import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { handleSendEmailVerificationCode, handleConfirmSignUp } from "../lib/cognito-actions";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface EmailVerificationProps {
  email: string;
  onBack: () => void;
}

export const EmailVerification = ({ email, onBack }: EmailVerificationProps) => {
  const [verificationCode, setVerificationCode] = useState("");
  const [isCodeSent, setIsCodeSent] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [resendCooldown, setResendCooldown] = useState(30);
  const router = useRouter();

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (resendCooldown > 0) {
      timer = setInterval(() => {
        setResendCooldown((prev) => prev - 1);
      }, 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [resendCooldown]);

  const handleSendCode = async () => {
    if (resendCooldown > 0) return;
    
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
        setResendCooldown(30);
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
          window.location.reload()
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
    <div className="w-full max-w-md">
  

        {/* Form */}
        <div className="space-y-6">
          <div>
            <label className="block text-slate-700 text-sm font-medium mb-2">
              Email Address
            </label>
            <Input
              type="email"
              value={email}
              disabled
              className="w-full h-12 px-4 rounded-full border border-slate-200 focus:border-green-600 transition-all duration-200 bg-gray-50 focus:ring-0 focus:outline-none focus:shadow-none"
            />
          </div>

          {isCodeSent && (
            <div>
              <label className="block text-slate-700 text-sm font-medium mb-2">
                Verification Code
              </label>
              <Input
                type="text"
                placeholder="Enter verification code"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                disabled={loading}
                className={`w-full h-12 px-4 rounded-full border transition-all duration-200 ${
                  verificationCode ? 'border-green-600' : 'border-slate-200'
                } focus:border-green-600 focus:ring-0 focus:outline-none focus:shadow-none`}
              />
            </div>
          )}

          {error && (
            <div className="text-red-500 text-sm font-medium">{error}</div>
          )}

          {successMessage && (
            <div className="text-green-500 text-sm font-medium">{successMessage}</div>
          )}

          <Button
            onClick={isCodeSent ? handleVerifyCode : handleSendCode}
            disabled={loading}
            className="w-full h-12 bg-green-600 hover:bg-emerald-700 text-white font-semibold rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            {loading 
              ? (isCodeSent ? "Verifying..." : "Sending Code...") 
              : (isCodeSent ? "Verify & Continue" : "Send Verification Code")}
          </Button>

          {isCodeSent && (
            <Button
              onClick={handleSendCode}
              disabled={loading || resendCooldown > 0}
              variant="outline"
              className="w-full h-12 border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold rounded-full transition-all duration-200"
            >
              {resendCooldown > 0 ? `Resend Code (${resendCooldown}s)` : 'Resend Code'}
            </Button>
          )}
        </div>
      </div>
  );
};
