import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";

interface SignInFormProps {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  rememberMe: boolean;
  setRememberMe: (remember: boolean) => void;
  loading: boolean;
  error: string | null;
  handleSubmit: () => void;
  setShowForgotPassword: (show: boolean) => void;
  onSignUpClick: () => void;
}

export const SignInForm = ({
  email,
  setEmail,
  password,
  setPassword,
  rememberMe,
  setRememberMe,
  loading,
  error,
  handleSubmit,
  setShowForgotPassword,
  onSignUpClick
}: SignInFormProps) => {
  return (
    <>
      <div className="text-center mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-slate-600 text-sm">Welcome to </span>
            <span className="text-green-600 font-semibold">
              Valura.AI
            </span>
          </div>
          <div className="text-right mt-6">
            <div className="text-slate-500 text-sm">
              Don't have an Account?
            </div>
            <button
              onClick={onSignUpClick}
              className="text-green-600 text-sm font-semibold hover:underline"
            >
              Sign up
            </button>
          </div>
        </div>
        <h2 className="text-[54.21px] font-extrabold text-gray-800 text-left text-opacity-80">
          Sign In
        </h2>
      </div>
      <div className="space-y-6">
        <div>
          <label className="block text-slate-700 text-sm font-medium mb-2">
            Enter your username or email address
          </label>
          <Input
            type="email"
            placeholder="Username or email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full h-12 px-4 rounded-full border transition-all duration-200 ${
              email ? "border-green-600" : "border-slate-200"
            } focus:border-green-600 focus:ring-0 focus:outline-none focus:shadow-none`}
            disabled={loading}
          />
        </div>

        <div>
          <label className="block text-slate-700 text-sm font-medium mb-2">
            Enter your password
          </label>
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`w-full h-12 px-4 rounded-full border transition-all duration-200 ${
              password ? "border-green-600" : "border-slate-200"
            } focus:border-green-600 focus:ring-0 focus:outline-none focus:shadow-none`}
            disabled={loading}
          />
        </div>

        {error && (
          <div className="text-red-500 text-sm font-medium">{error}</div>
        )}

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="remember"
              checked={rememberMe}
              onCheckedChange={(checked) =>
                setRememberMe(checked as boolean)
              }
              className={`rounded-full ${
                rememberMe
                  ? "bg-green-600 border-green-600"
                  : "bg-gray-400"
              }`}
            />
            <label
              htmlFor="remember"
              className="text-sm text-slate-600"
            >
              Remember me
            </label>
          </div>
          <button
            type="button"
            onClick={() => setShowForgotPassword(true)}
            className="text-green-600 text-sm font-semibold hover:underline"
          >
            Forgot Password
          </button>
        </div>

        <Button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full h-12 bg-green-600 hover:bg-emerald-700 text-white font-semibold rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          {loading ? "Signing In..." : "Sign In"}
        </Button>
      </div>
    </>
  );
}; 