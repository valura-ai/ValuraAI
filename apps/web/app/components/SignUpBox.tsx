"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { handleSignUp } from "../lib/cognito-actions";
import { getErrorMessage } from "../utils/get-error-message";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";

interface SignUpBoxProps {
  onCredentialsSubmit: (email: string) => void;
  firstName: string;
  lastName: string;
}

export const SignUpBox = ({ onCredentialsSubmit, firstName, lastName }: SignUpBoxProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const router = useRouter();

  async function handleSubmit() {
    if (!email || !password) {
      setError("Please fill out all fields.");
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
        onCredentialsSubmit(email);
      }
    } catch (error) {
      setError(getErrorMessage(error));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-slate-700 text-sm font-medium mb-2">
          Enter your email address
        </label>
        <Input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`w-full h-12 px-4 rounded-full border transition-all duration-200 ${
            email ? 'border-green-600' : 'border-slate-200'
          } focus:border-green-600 focus:ring-0 focus:outline-none focus:shadow-none`}
          required
        />
      </div>

      <div>
        <label className="block text-slate-700 text-sm font-medium mb-2">
          Create a password
        </label>
        <Input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={`w-full h-12 px-4 rounded-full border transition-all duration-200 ${
            password ? 'border-green-600' : 'border-slate-200'
          } focus:border-green-600 focus:ring-0 focus:outline-none focus:shadow-none`}
          required
        />
      </div>

      {error && (
        <div className="text-red-500 text-sm font-medium">{error}</div>
      )}

      {/* Remember Me & Forgot Password */}
      {/* <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="remember"
            checked={rememberMe}
            onCheckedChange={(checked) =>
              setRememberMe(checked as boolean)
            }
            className={`rounded-full ${
              rememberMe ? 'bg-green-600 border-green-600' : 'bg-gray-400'
            }`}
          />
          <label htmlFor="remember" className="text-sm text-slate-600">
            Remember me
          </label>
        </div>
        <button
          type="button"
          className="text-green-600 text-sm font-semibold hover:underline"
        >
          Forgot Password
        </button>
      </div> */}

      {/* Sign Up Button */}
      <Button
        onClick={handleSubmit}
        disabled={loading}
        className="w-full h-12 bg-green-600 hover:bg-emerald-700 text-white font-semibold rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
      >
        {loading ? "Creating Account..." : "Create Account"}
      </Button>
    </div>
  );
};
