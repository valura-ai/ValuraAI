import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  handleSignIn,
  handleVerifyTOTPSetup,
  handleConfirmTOTP,
} from "../lib/cognito-actions";
import QRCode from "qrcode.react";

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
  const [forgotStep, setForgotStep] = useState<null | "EMAIL" | "CODE">(null);
  const [forgotEmail, setForgotEmail] = useState("");
  const [forgotCode, setForgotCode] = useState("");
  const [forgotNewPassword, setForgotNewPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
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

  const handleForgotPasswordRequest = async () => {
    if (!forgotEmail) {
      setError("Please enter your email address.");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      // Call Cognito forgot password (to be implemented in cognito-actions)
      await import("../lib/cognito-actions").then((m) =>
        m.handleForgotPassword(forgotEmail)
      );
      setForgotStep("CODE");
    } catch (err: any) {
      setError(err.message || "Failed to send reset code.");
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPasswordConfirm = async () => {
    if (!forgotCode || !forgotNewPassword) {
      setError("Please enter the code and new password.");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      await import("../lib/cognito-actions").then((m) =>
        m.handleConfirmForgotPassword(forgotEmail, forgotCode, forgotNewPassword)
      );
      setForgotStep(null);
      setError("Password reset successful. Please sign in.");
    } catch (err: any) {
      setError(err.message || "Failed to reset password.");
    } finally {
      setLoading(false);
    }
  };

  const renderMFAForm = () => {
    if (mfaState.type === "TOTP_SETUP") {
      return (
        <div className="flex flex-col items-center">
          <h2 className="text-white text-xl mb-4">
            Set Up Two-Factor Authentication
          </h2>
          <p className="text-white/80 text-sm mb-4 text-center">
            Scan this QR code with your authenticator app
          </p>
          <div className="bg-white p-4 rounded-lg mb-4">
            {mfaState.data?.otpAuthUrl && (
              <QRCode
                value={mfaState.data.otpAuthUrl}
                size={192}
                level="H"
                includeMargin={true}
              />
            )}
          </div>
          <input
            type="text"
            className="w-full bg-white/13 border border-white/30 rounded-3xl px-4 py-2 text-white text-sm placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500 mb-4"
            placeholder="Enter 6-digit code"
            value={totpCode}
            onChange={(e) => setTotpCode(e.target.value)}
            disabled={loading}
          />
          <button
            onClick={handleTOTPSubmit}
            disabled={loading}
            className={`${
              loading ? "opacity-50 cursor-not-allowed" : ""
            } bg-gradient-to-r from-purple-700 to-cyan-600 text-white text-sm font-medium py-2 px-6 rounded-3xl transition-all duration-300`}
          >
            {loading ? "Verifying..." : "Verify Code"}
          </button>
        </div>
      );
    }

    if (mfaState.type === "TOTP_REQUIRED") {
      return (
        <div className="flex flex-col items-center">
          <h2 className="text-white text-xl mb-4">Two-Factor Authentication</h2>
          <p className="text-white/80 text-sm mb-4 text-center">
            Enter the 6-digit code from your authenticator app
          </p>
          <input
            type="text"
            className="w-full bg-white/13 border border-white/30 rounded-3xl px-4 py-2 text-white text-sm placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500 mb-4"
            placeholder="Enter 6-digit code"
            value={totpCode}
            onChange={(e) => setTotpCode(e.target.value)}
            disabled={loading}
          />
          <button
            onClick={handleTOTPSubmit}
            disabled={loading}
            className={`${
              loading ? "opacity-50 cursor-not-allowed" : ""
            } bg-gradient-to-r from-purple-700 to-cyan-600 text-white text-sm font-medium py-2 px-6 rounded-3xl transition-all duration-300`}
          >
            {loading ? "Verifying..." : "Verify Code"}
          </button>
        </div>
      );
    }

    return null;
  };

  // MFA and forgot password forms (keep as is for now)
  if (forgotStep === "EMAIL") {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#f5fafd] to-[#eaf6f1]">
        <div className="w-[400px] bg-white rounded-3xl shadow-xl px-10 py-10 flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Forgot Password</h2>
          <input
            type="email"
            className="w-full bg-gray-100 border border-gray-200 rounded-full px-4 py-2 text-gray-800 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-300 mb-4"
            placeholder="Enter your email"
            value={forgotEmail}
            onChange={(e) => setForgotEmail(e.target.value)}
            disabled={loading}
          />
          <button
            onClick={handleForgotPasswordRequest}
            disabled={loading}
            className={`w-full py-2 rounded-full text-white font-semibold text-base shadow transition ${loading ? "bg-green-400 opacity-60 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"}`}
          >
            {loading ? "Sending..." : "Send Reset Code"}
          </button>
          <button
            onClick={() => setForgotStep(null)}
            className="text-green-600 text-xs mt-2 hover:underline"
          >
            Back to Sign In
          </button>
          {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
        </div>
      </div>
    );
  }

  if (forgotStep === "CODE") {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#f5fafd] to-[#eaf6f1]">
        <div className="w-[400px] bg-white rounded-3xl shadow-xl px-10 py-10 flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Reset Password</h2>
          <input
            type="text"
            className="w-full bg-gray-100 border border-gray-200 rounded-full px-4 py-2 text-gray-800 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-300 mb-4"
            placeholder="Enter code from email"
            value={forgotCode}
            onChange={(e) => setForgotCode(e.target.value)}
            disabled={loading}
          />
          <input
            type="password"
            className="w-full bg-gray-100 border border-gray-200 rounded-full px-4 py-2 text-gray-800 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-300 mb-4"
            placeholder="Enter new password"
            value={forgotNewPassword}
            onChange={(e) => setForgotNewPassword(e.target.value)}
            disabled={loading}
          />
          <button
            onClick={handleForgotPasswordConfirm}
            disabled={loading}
            className={`w-full py-2 rounded-full text-white font-semibold text-base shadow transition ${loading ? "bg-green-400 opacity-60 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"}`}
          >
            {loading ? "Resetting..." : "Reset Password"}
          </button>
          <button
            onClick={() => setForgotStep("EMAIL")}
            className="text-green-600 text-xs mt-2 hover:underline"
          >
            Back
          </button>
          {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
        </div>
      </div>
    );
  }

  // Main Sign In UI
  return (
    <div
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center p-4"
      style={{ fontFamily: 'TWK Lausanne, Inter, sans-serif' }}
    >
      {/* Background Image */}
      <div
        className="fixed top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat z-[1]"
        style={{
          backgroundImage: "url('/assets/auth/01-Dashboard.png')",
        }}
      />

      {/* Content */}
      <div className="relative z-[2] w-full max-w-6xl grid grid-cols-2 items-center">
        {/* Left Side - Welcome Text and Logo */}
        <div className="flex flex-col justify-center max-w-lg mr-[100px]">
          <button
            className="bg-white/80 hover:bg-white/90 rounded-full px-6 py-2 shadow-sm text-slate-700 font-medium mb-8 w-fit"
            onClick={() => router.back()}
          >
            &larr; Back
          </button>
          <h1 className="text-4xl lg:text-5xl font-light text-slate-700 mb-4" style={{ fontFamily: 'TWK Lausanne, Inter, sans-serif' }}>
            Welcome to
          </h1>
          <div className="flex items-center mb-6">
            <img
              src="/assets/logo_1.svg"
              alt="Valura.ai Logo"
              className="h-20 w-auto object-contain"
            />
          </div>
          <p className="text-slate-600 text-lg max-w-md">
            Sign in to your account to access your personalized wealth management dashboard.
          </p>
        </div>

        {/* Right Side (Sign In Card) */}
        <div className="bg-white rounded-3xl shadow-2xl p-10 flex flex-col gap-4 w-full max-w-md">
          <div className="flex justify-between items-center mb-2">
            <div>
              <span className="text-slate-600 text-sm">Welcome to </span>
              <span className="text-emerald-600 font-semibold">Valura.AI</span>
              <h1 className="text-3xl font-bold text-slate-800 mt-1">Sign In</h1>
            </div>
            <div className="text-right mt-6">
              <div className="text-slate-500 text-sm">Don't have an Account?</div>
              <button
                onClick={onSignUpClick}
                className="text-emerald-600 text-sm font-semibold hover:underline"
              >
                Sign up
              </button>
            </div>
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-slate-700 text-sm font-medium mb-2">
              Enter your email address
            </label>
            <input
              type="email"
              id="email"
              className="w-full h-12 px-4 rounded-full border border-slate-200 focus:border-green-600 transition-all duration-200 text-slate-800 text-sm placeholder-gray-400 focus:outline-none"
              placeholder="Username or email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-slate-700 text-sm font-medium mb-2">
              Enter your Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="w-full h-12 px-4 rounded-full border border-slate-200 focus:border-green-600 transition-all duration-200 text-slate-800 text-sm placeholder-gray-400 focus:outline-none"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
            />
          </div>

          {/* Remember me and Forgot Password */}
          <div className="flex justify-between items-center mt-2 mb-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 rounded border-gray-300 mr-2"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                disabled={loading}
              />
              <label htmlFor="remember" className="text-slate-600 text-sm">
                Remember me
              </label>
            </div>
            <button
              type="button"
              onClick={() => {
                setForgotStep("EMAIL");
                setError(null);
              }}
              className="text-emerald-600 text-sm font-medium hover:underline"
            >
              Forgot Password
            </button>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-2 text-red-500 text-sm font-medium">{error}</div>
          )}

          {/* Sign In Button */}
          <button
            onClick={handleSubmit}
            disabled={loading}
            className={`w-full mt-2 py-3 rounded-full text-white font-semibold text-lg shadow transition ${
              loading
                ? "bg-green-400 opacity-60 cursor-not-allowed"
                : "bg-emerald-600 hover:bg-emerald-700"
            }`}
          >
            {loading ? "Signing In..." : "Sign in"}
          </button>
        </div>
      </div>
    </div>
  );
};
