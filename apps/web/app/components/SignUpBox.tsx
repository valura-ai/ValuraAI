import Link from "next/link";
import { useState } from "react";

interface SignUpBoxProps {
  onSignInClick: () => void;
}

export const SignUpBox = ({ onSignInClick }: SignUpBoxProps) => {
  const [isUAECitizen, setIsUAECitizen] = useState<"yes" | "no" | null>(null);

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

      {/* White Rectangle with Sign Up Form */}
      <div className="bg-black/20 backdrop-blur-sm w-[28vw] h-auto min-h-[200px] py-9 px-9 rounded-2xl shadow-lg flex flex-col justify-center border border-white/20">
        {/* First Name Input */}
        <div className="mb-4">
          <input
            type="text"
            id="firstName"
            className="w-full bg-white/13 border border-white/30 rounded-3xl px-4 py-2 text-white text-sm placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="First Name"
          />
        </div>

        {/* Last Name Input */}
        <div className="mb-4">
          <input
            type="text"
            id="lastName"
            className="w-full bg-white/13 border border-white/30 rounded-3xl px-4 py-2 text-white text-sm placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="Last Name"
          />
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <input
            type="email"
            id="email"
            className="w-full bg-white/13 border border-white/30 rounded-3xl px-4 py-2 text-white text-sm placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="Email Address"
          />
        </div>

        {/* UAE Citizen Question */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-white text-sm">Are you a UAE citizen?</p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setIsUAECitizen("yes")}
              className="px-4 py-1 rounded-3xl transition-all duration-200 text-sm"
              style={{
                background:
                  isUAECitizen === "yes"
                    ? "linear-gradient(to right, #10b981, #facc15)"
                    : "rgba(255, 255, 255, 0.1)",
                color: isUAECitizen === "yes" ? "black" : "white",
                borderColor:
                  isUAECitizen === "yes"
                    ? "transparent"
                    : "rgba(255, 255, 255, 0.2)",
              }}
            >
              Yes
            </button>
            <button
              type="button"
              onClick={() => setIsUAECitizen("no")}
              className="px-4 py-1 rounded-3xl transition-all duration-200 text-sm "
              style={{
                background:
                  isUAECitizen === "no"
                    ? "linear-gradient(to right, #10b981, #facc15)"
                    : "rgba(255, 255, 255, 0.1)",
                color: isUAECitizen === "no" ? "black" : "white",
                borderColor:
                  isUAECitizen === "no"
                    ? "transparent"
                    : "rgba(255, 255, 255, 0.2)",
              }}
            >
              No
            </button>
          </div>
        </div>

        {/* Sign Up Button */}
        <button className="bg-gradient-to-r from-purple-700 to-cyan-600 bg-[length:200%_100%] bg-[position:100%_50%] hover:bg-[position:0%_50%] text-white text-sm font-medium py-2 rounded-3xl transition-[background-position] duration-300 ease-in-out">
          Sign Up
        </button>
      </div>
    </div>
  );
};
