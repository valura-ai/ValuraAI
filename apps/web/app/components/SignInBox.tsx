import Link from "next/link";

interface SignInBoxProps {
  onSignUpClick: () => void;
}

export const SignInBox = ({ onSignUpClick }: SignInBoxProps) => {
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
          <button
            onClick={onSignUpClick}
            className="bg-black/30 text-sm hover:bg-black/40 text-white px-6 py-2 rounded-3xl transition-all duration-200 border border-white/20"
          >
            Sign Up
          </button>
        </div>
      </div>

      {/* White Rectangle with Login Form */}
      <div className="bg-black/20 backdrop-blur-sm w-[28vw] h-auto min-h-[200px] py-9 px-9 rounded-2xl shadow-lg flex flex-col justify-center border border-white/20">
        {/* Email Input */}
        <div className="mb-4">
          <input
            type="email"
            id="email"
            className="w-full bg-white/13 border border-white/30 rounded-3xl px-4 py-2 text-white text-sm placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="Email Address"
          />
        </div>

        {/* Password Input */}
        <div className="mb-6">
          <input
            type="password"
            id="password"
            className="w-full bg-white/13 border border-white/30 rounded-3xl px-4 py-2 text-white text-sm placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="Password"
          />
        </div>

        {/* Remember me and Forget Password */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              className="h-4 w-4 bg-white/10 border-white/30 rounded focus:ring-blue-500 mr-2"
            />
            <label htmlFor="remember" className="text-white text-sm font-light">
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

        {/* Sign In Button */}
        <button className="bg-gradient-to-r from-purple-700 to-cyan-600 bg-[length:200%_100%] bg-[position:100%_50%] hover:bg-[position:0%_50%] text-white text-sm font-medium py-2 rounded-3xl transition-[background-position] duration-300 ease-in-out ">
          Sign In
        </button>
      </div>
    </div>
  );
};
