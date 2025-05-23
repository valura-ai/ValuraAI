import Link from "next/link";
import { signIn } from "next-auth/react";

interface SignUpBoxProps {
  onSignInClick: () => void;
}

export const SignUpBox = ({ onSignInClick }: SignUpBoxProps) => {
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

      {/* White Rectangle with Social Login Buttons */}
      <div className="bg-black/20 backdrop-blur-sm w-[26vw] h-auto min-h-[200px] py-9 px-9 rounded-2xl shadow-lg flex flex-col justify-center border border-white/20">
        <p className="text-white text-sm mb-6 text-center">
          Sign In with one of the following:
        </p>
        <div className="flex flex-col gap-4">
          <button
            type="button"
            onClick={() => signIn("google")}
            className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white/70 hover:bg-white/100 px-4 py-2 text-sm font-medium text-black-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <img src="/google.svg" alt="Google" className="h-5 w-5" />
            <span>Continue with Google</span>
          </button>
          <button
            type="button"
            onClick={() => signIn("github")}
            className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white/70 hover:bg-white/100 px-4 py-2 text-sm font-medium text-black-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <img src="/github.svg" alt="GitHub" className="h-5 w-5" />
            <span>Continue with GitHub</span>
          </button>
          <button
            type="button"
            onClick={() => signIn("linkedin")}
            className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white/70 hover:bg-white/100 px-4 py-2 text-sm font-medium text-black-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <img src="/linkedin.svg" alt="LinkedIn" className="h-5 w-5" />
            <span>Continue with LinkedIn</span>
          </button>
          <button
            type="button"
            onClick={() => signIn("apple")}
            className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white/70 hover:bg-white/100 px-4 py-2 text-sm font-medium text-black-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <img src="/apple.svg" alt="Apple" className="h-5 w-5" />
            <span>Continue with Apple</span>
          </button>
        </div>
      </div>
    </div>
  );
};
