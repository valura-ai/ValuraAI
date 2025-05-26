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
          Log in to your account to access your personalized wealth management
          dashboard.
        </p>
        <div className="mt-2 w-full pl-4">
          <p className="text-white/80 text-sm mt-2 mb-4">
            Don't have an account?
          </p>
          {mfaState.type !== "TOTP_SETUP" && (
            <button
              onClick={onSignUpClick}
              className="bg-black/30 text-sm hover:bg-black/40 text-white px-6 py-2 rounded-3xl transition-all duration-200 border border-white/20"
            >
              Sign Up
            </button>
          )}
        </div>
      </div>

      {/* White Rectangle with Login Form */}
      <div className="bg-black/20 backdrop-blur-sm w-[28vw] h-auto min-h-[200px] py-9 px-9 rounded-2xl shadow-lg flex flex-col justify-center border border-white/20">
        {mfaState.type ? (
          renderMFAForm()
        ) : (
          <>
            {/* Email Input */}
            <div className="mb-4">
              <input
                type="email"
                id="email"
                className="w-full bg-white/13 border border-white/30 rounded-3xl px-4 py-2 text-white text-sm placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
              />
            </div>

            {/* Password Input */}
            <div className="mb-6">
              <input
                type="password"
                id="password"
                className="w-full bg-white/13 border border-white/30 rounded-3xl px-4 py-2 text-white text-sm placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
              />
            </div>

            {/* Remember me and Forget Password */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="h-4 w-4 bg-white/10 border-white/30 rounded focus:ring-blue-500 mr-2"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  disabled={loading}
                />
                <label
                  htmlFor="remember"
                  className="text-white text-sm font-light"
                >
                  Remember me
                </label>
              </div>
              <a
                href="#"
                className="text-sm bg-gradient-to-r from-emerald-500 to-yellow-400 bg-clip-text text-transparent"
              >
                Forgot password?
              </a>
            </div>

            {error && (
              <div className="mb-4 text-red-400 text-sm font-medium">
                {error}
              </div>
            )}

            {/* Sign In Button */}
            <button
              onClick={handleSubmit}
              disabled={loading}
              className={`${
                loading ? "opacity-50 cursor-not-allowed" : ""
              } bg-gradient-to-r from-purple-700 to-cyan-600 text-white text-sm font-medium py-2 rounded-3xl transition-all duration-300`}
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </>
        )}
      </div>
    </div>
  );
};
