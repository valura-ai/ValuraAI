import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 w-full">
      <nav className="container mx-auto mt-5 px-10 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-16">
          {/* Home Button */}
          <div className="flex-shrink-0">
            <div className="flex items-center border-1 gap-1 border-white/50 rounded-full px-4 py-2">
              <svg
                className="h-4 w-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <button className="text-white text-md font-medium">Home</button>
            </div>
          </div>

          {/* Logo - Absolutely Centered */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Image
              src="/valura.png"
              alt="Logo"
              width={150}
              height={50}
              className="h-11 w-auto"
            />
          </div>

          {/* Auth Buttons */}
          <div className="flex flex-shrink-0 gap-6">
            <Link
              href="/auth"
              className="flex items-center border-1 gap-1 bg-white/25 border-white/50 rounded-full px-4 py-2 text-white text-md font-medium transition-colors hover:bg-white/40"
            >
              Login
            </Link>
            <Link
              href="/auth"
              className="flex items-center border-1 gap-1 bg-white border-white/50 rounded-full px-4 py-2 text-[#276588] text-md font-medium transition-colors hover:bg-white/80"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
