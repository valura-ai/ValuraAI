"use client"; // Important: Convert to client component

import React, { useState, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { SignInBox } from "../components/SignInBox";
import { SignUpBox } from "../components/SignUpBox";
import { useSearchParams } from "next/navigation";

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    // Check for error in URL
    const errorParam = searchParams.get("error");
    if (errorParam) {
      switch (errorParam) {
        case "session_exchange_failed":
          setError(
            "Failed to validate your authentication session. Please try again."
          );
          break;
        case "unknown_error":
          setError("An unknown error occurred. Please try again.");
          break;
        default:
          setError("Authentication error. Please try again.");
      }
    }
  }, [searchParams]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image - using inline style to avoid any CSS processing issues */}
      <div
        className="fixed top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat z-[1]"
        style={{
          backgroundImage: "url('/assets/auth/background-auth.png')",
        }}
      />

      <Navbar />

      {/* Error notification */}
      {error && (
        <div className="fixed top-24 left-0 right-0 mx-auto w-fit bg-red-500/80 text-white px-6 py-3 rounded-md z-50">
          {error}
        </div>
      )}

      {/* CONTENT */}
      <div className="absolute top-0 left-0 w-full h-screen flex items-center justify-center z-[2]">
        {isSignUp ? (
          <SignUpBox onSignInClick={() => setIsSignUp(false)} />
        ) : (
          <SignInBox onSignUpClick={() => setIsSignUp(true)} />
        )}
      </div>
    </div>
  );
}
