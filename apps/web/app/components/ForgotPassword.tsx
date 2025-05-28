import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface ForgotPasswordProps {
  onBack: () => void;
}

export const ForgotPassword = ({ onBack }: ForgotPasswordProps) => {
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [step, setStep] = useState<"EMAIL" | "CODE">("EMAIL");

  const handleEmailSubmit = async () => {
    if (!email) {
      setError("Please enter your email address.");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      await import("../lib/cognito-actions").then((m) =>
        m.handleForgotPassword(email)
      );
      setStep("CODE");
    } catch (err: any) {
      setError(err.message || "Failed to send reset code.");
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async () => {
    if (!verificationCode || !newPassword) {
      setError("Please enter the code and new password.");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      await import("../lib/cognito-actions").then((m) =>
        m.handleConfirmForgotPassword(email, verificationCode, newPassword)
      );
      onBack();
    } catch (err: any) {
      setError(err.message || "Failed to reset password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-[54.21px] font-extrabold text-gray-800 text-left text-opacity-80 mb-6">
          {step === "EMAIL" ? "Forgot Password" : "Reset Password"}
        </h2>
        <p className="text-slate-600 text-sm mb-6">
          {step === "EMAIL" 
            ? "Enter your email address and we'll send you a code to reset your password."
            : "Enter the verification code sent to your email and your new password."}
        </p>
      </div>

      {step === "EMAIL" ? (
        <div>
          <label className="block text-slate-700 text-sm font-medium mb-2">
            Email Address
          </label>
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full h-12 px-4 rounded-full border transition-all duration-200 ${
              email ? 'border-green-600' : 'border-slate-200'
            } focus:border-green-600 focus:ring-0 focus:outline-none focus:shadow-none`}
            disabled={loading}
          />
        </div>
      ) : (
        <>
          <div>
            <label className="block text-slate-700 text-sm font-medium mb-2">
              Verification Code
            </label>
            <Input
              type="text"
              placeholder="Enter verification code"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              className={`w-full h-12 px-4 rounded-full border transition-all duration-200 ${
                verificationCode ? 'border-green-600' : 'border-slate-200'
              } focus:border-green-600 focus:ring-0 focus:outline-none focus:shadow-none`}
              disabled={loading}
            />
          </div>
          <div>
            <label className="block text-slate-700 text-sm font-medium mb-2">
              New Password
            </label>
            <Input
              type="password"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className={`w-full h-12 px-4 rounded-full border transition-all duration-200 ${
                newPassword ? 'border-green-600' : 'border-slate-200'
              } focus:border-green-600 focus:ring-0 focus:outline-none focus:shadow-none`}
              disabled={loading}
            />
          </div>
        </>
      )}

      {error && (
        <div className="text-red-500 text-sm font-medium">{error}</div>
      )}

      <div className="space-y-4">
        <Button
          onClick={step === "EMAIL" ? handleEmailSubmit : handleResetPassword}
          disabled={loading}
          className="w-full h-12 bg-green-600 hover:bg-emerald-700 text-white font-semibold rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          {loading 
            ? (step === "EMAIL" ? "Sending Code..." : "Resetting Password...") 
            : (step === "EMAIL" ? "Send Reset Code" : "Reset Password")}
        </Button>

        <Button
          onClick={step === "EMAIL" ? onBack : () => setStep("EMAIL")}
          variant="outline"
          className="w-full h-12 border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold rounded-full transition-all duration-200"
        >
          {step === "EMAIL" ? "Back to Sign In" : "Back"}
        </Button>
      </div>
    </div>
  );
}; 