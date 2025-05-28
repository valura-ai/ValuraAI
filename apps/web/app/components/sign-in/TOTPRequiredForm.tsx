import { Button } from "../ui/button";
import { Input } from "../ui/input";

interface TOTPRequiredFormProps {
  totpCode: string;
  setTotpCode: (code: string) => void;
  handleTOTPSubmit: () => void;
  loading: boolean;
  error: string | null;
}

export const TOTPRequiredForm = ({
  totpCode,
  setTotpCode,
  handleTOTPSubmit,
  loading,
  error
}: TOTPRequiredFormProps) => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-[54.21px] font-extrabold text-gray-800 text-left text-opacity-80">
          Enter 2FA Code
        </h2>
        <p className="text-slate-600 text-sm mt-2 text-left">
          Enter the 6-digit code from your authenticator app
        </p>
      </div>
      <div>
        <label className="block text-slate-700 text-sm font-medium mb-2">
          Enter 6-digit code
        </label>
        <Input
          type="text"
          placeholder="Enter 6-digit code"
          value={totpCode}
          onChange={(e) => setTotpCode(e.target.value)}
          className="w-full h-12 px-4 rounded-full border transition-all duration-200 border-slate-200 focus:border-green-600 focus:ring-0 focus:outline-none focus:shadow-none"
          disabled={loading}
        />
      </div>
      {error && (
        <div className="text-red-500 text-sm font-medium">{error}</div>
      )}
      <Button
        onClick={handleTOTPSubmit}
        disabled={loading}
        className="w-full h-12 bg-green-600 hover:bg-emerald-700 text-white font-semibold rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
      >
        {loading ? "Verifying..." : "Verify Code"}
      </Button>
    </div>
  );
}; 