"use client"; // Important: Convert to client component

import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { SignUpBox } from "../components/SignUpBox";

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false);

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

      {/* CONTENT */}
      <div className="absolute top-0 left-0 w-full h-screen flex items-center justify-center z-[2]">
        <SignUpBox onSignInClick={() => {}} />
      </div>
    </div>
  );
}
