"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { handleSignUp } from "../lib/cognito-actions";
import { getErrorMessage } from "../utils/get-error-message";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Checkbox } from "../components/ui/checkbox";

interface SignUpBoxProps {
  onSignInClick: () => void;
}

export const SignUpBox = ({ onSignInClick }: SignUpBoxProps) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [isUAECitizen, setIsUAECitizen] = useState<"yes" | "no" | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const router = useRouter();

  async function handleSubmit() {
    if (!firstName || !lastName || !email || !isUAECitizen) {
      alert("Please fill out all fields.");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const formData = new FormData();
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("email", email);
      formData.append("password", password);

      const errorMessage = await handleSignUp(formData);

      if (errorMessage) {
        setError(errorMessage);
      } else {
        router.push(`/auth/confirm-signup?email=${encodeURIComponent(email)}`);
      }
    } catch (error) {
      setError(getErrorMessage(error));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      {/* Back Button */}

      <div className="w-full max-w-6xl grid grid-cols-2">
        {/* Left Side - Welcome Text */}
        <div className="flex-1 max-w-lg  mr-[100px]">
          <div className="mb-[120px]">
            {/* Back Button */}
            <Button
              variant="ghost"
              className="bg-white/80 hover:bg-white/90 rounded-full px-6 py-2 shadow-sm"
            >
              Back
            </Button>
          </div>
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-light text-slate-700 mb-4">
              Welcome to
            </h1>
            {/* Logo Image */}
            <div className="flex justify-center lg:justify-start mb-6">
              <Image
                src="/assets/logo_1.svg"
                alt="Logo"
                width={306.53}
                height={102.9}
              />
            </div>
            <p className="text-slate-600 text-lg max-w-md mx-auto lg:mx-0">
              Sign in to your account to access your personalized wealth
              management dashboard.
            </p>
          </div>
        </div>

        {/* Right Side - Sign Up Form */}
        <div className="w-full max-w-md">
          <div className="bg-white rounded-3xl shadow-2xl p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-slate-600 text-sm">Welcome to </span>
                  <span className="text-emerald-600 font-semibold">
                    Valura.AI
                  </span>
                </div>
                <div className="text-right mt-6">
                  <div className="text-slate-500 text-sm">
                    Have an Account ?
                  </div>
                  <button className="text-emerald-600 text-sm font-semibold hover:underline">
                    Log in
                  </button>
                </div>
              </div>
              <h2 className="text-[54.21px] font-bold text-slate-800 text-left">
                Sign up
              </h2>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-slate-700 text-sm font-medium mb-2">
                  Enter your username or email address
                </label>
                <Input
                  type="email"
                  placeholder="Username or email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-12 px-4 rounded-full border border-slate-200 focus:border-green-600 transition-all duration-200"
                  required
                />
              </div>

              <div>
                <label className="block text-slate-700 text-sm font-medium mb-2">
                  Enter your Password
                </label>
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-12 px-4 rounded-full border border-slate-200 focus:border-green-600 transition-all duration-200"
                  required
                />
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remember"
                    checked={rememberMe}
                    onCheckedChange={(checked) =>
                      setRememberMe(checked as boolean)
                    }
                    className="rounded-full bg-gray-400"
                  />
                  <label htmlFor="remember" className="text-sm text-slate-600">
                    Remember me
                  </label>
                </div>
                <button
                  type="button"
                  className="text-emerald-600 text-sm font-semibold hover:underline"
                >
                  Forgot Password
                </button>
              </div>

              {/* Sign In Button */}
              <Button
                type="submit"
                className="w-full h-12 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Sign In
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
