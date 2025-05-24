"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { handleSignUp } from "../lib/cognito-actions"; 
import { getErrorMessage } from "../utils/get-error-message"; 

interface SignUpBoxProps {
  onSignInClick: () => void;
}

export const SignUpBox = ({ onSignInClick }: SignUpBoxProps) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [isUAECitizen, setIsUAECitizen] = useState<"yes" | "no" | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  async function onSubmit() {
    if (!firstName || !lastName || !email || !phone || !isUAECitizen) {
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
    <div className="flex items-center gap-32">
      {/* Left Panel */}
      <div className="flex flex-col items-center w-[25vw]">
        <div className="flex items-center mb-2 w-full">
          <div className="flex flex-col items-start mr-2">
            <h1 className="text-white mb-[-0.8rem] font-extralight text-3xl pl-2.5 self-start">
              Welcome to
            </h1>
            <img src="/valura-text.svg" alt="Valura" className="h-20" />
          </div>
          <img src="/valura-logo.svg" alt="Valura Logo" className="h-24 mb-5" />
        </div>
        <p className="text-white/80 pl-4 text-sm text-left w-full -mt-2">
          Create your account to access your personalized wealth management dashboard.
        </p>
        <div className="mt-2 w-full pl-4">
          <p className="text-white/80 text-sm mt-2 mb-4">
            Already have an account?
          </p>
          <button
            onClick={onSignInClick}
            className="bg-black/30 text-sm hover:bg-black/40 text-white px-6 py-2 rounded-3xl border border-white/20"
          >
            Sign In
          </button>
        </div>
      </div>

      {/* Sign Up Form */}
      <div className="bg-black/20 backdrop-blur-sm w-[28vw] py-9 px-9 rounded-2xl shadow-lg border border-white/20">
        <div className="mb-4">
          <input
            type="text"
            className="w-full bg-white/13 border border-white/30 rounded-3xl px-4 py-2 text-white text-sm placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            disabled={loading}
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            className="w-full bg-white/13 border border-white/30 rounded-3xl px-4 py-2 text-white text-sm placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            disabled={loading}
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            className="w-full bg-white/13 border border-white/30 rounded-3xl px-4 py-2 text-white text-sm placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            className="w-full bg-white/13 border border-white/30 rounded-3xl px-4 py-2 text-white text-sm placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="Enter Mobile Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            disabled={loading}
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            className="w-full bg-white/13 border border-white/30 rounded-3xl px-4 py-2 text-white text-sm placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading}
          />
        </div>

        {/* UAE Citizen */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-white text-sm">Are you a UAE citizen?</p>
          <div className="flex gap-2">
            {["yes", "no"].map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setIsUAECitizen(option as "yes" | "no")}
                className={`px-4 py-1 rounded-3xl text-sm ${
                  isUAECitizen === option
                    ? "bg-gradient-to-r from-green-500 to-yellow-400 text-black"
                    : "bg-white/10 text-white"
                }`}
                disabled={loading}
              >
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Error message */}
        {error && (
          <div className="mb-4 text-red-400 text-sm font-medium">{error}</div>
        )}

        {/* Submit Button */}
        <button
          onClick={onSubmit}
          disabled={loading}
          className={`${
            loading ? "opacity-50 cursor-not-allowed" : ""
          } bg-gradient-to-r from-purple-700 to-cyan-600 text-white text-sm font-medium py-2 rounded-3xl transition-all duration-300 w-full`}
        >
          {loading ? "Signing Up..." : "Sign Up"}
        </button>
      </div>
    </div>
  );
};
