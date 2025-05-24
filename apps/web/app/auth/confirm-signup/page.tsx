"use client";

import { useSearchParams } from "next/navigation";
import { EmailVerification } from "../../components/EmailVerification";
import { Navbar } from "../../components/Navbar";

export default function ConfirmSignUpPage() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  if (!email) {
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

        <div className="text-white text-center">
          <h1 className="text-2xl mb-4">Invalid Request</h1>
          <p>Email parameter is missing. Please try signing up again.</p>
        </div>
      </div>
    );
  }

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
        <EmailVerification email={email} />
      </div>
    </div>
  );
}
