"use client";
import { useState, useEffect } from "react";
import { Navbar } from "@web/components/Navbar";
import countryList from "react-select-country-list";
import { useMemo } from "react";
import { useRouter } from "next/navigation";

export default function VerifyMobile() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [code, setCode] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [country, setCountry] = useState("IN");
  const [userId, setUserId] = useState<string | null>(null);
  const countryOptions = useMemo(() => countryList().getData(), []);
  const router = useRouter();

  // Helper to get country dial code (for demo, only a few)
  const countryDialCodes: Record<string, string> = {
    IN: "+91",
    AE: "+971",
    US: "+1",
    GB: "+44",
    // ...add more as needed
  };
  const dialCode = countryDialCodes[country] || "+";

  useEffect(() => {
    // Fetch user info from /api/user to get the user ID
    fetch("/api/user")
      .then(res => res.json())
      .then(data => {
        if (data && data.data && data.data.id) {
          setUserId(data.data.id);
        }
      });
  }, []);

  // Simulate API
  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const fullNumber = `${dialCode}${phoneNumber.replace(/^\+|^0+/, "")}`;
    if (!userId) {
      setError("User not authenticated");
      setLoading(false);
      return;
    }
    try {
      const res = await fetch("/api/auth/verify/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phoneNumber: fullNumber, id: userId }),
      });
      const data = await res.json();
      console.log("Response from send code:", data);
      if (data?.success && data?.data?.status === "pending") {
        setSent(true);
        setError(null);
      } else {
        setError(data.error || "Failed to send code or max attempts reached");
      }
    } catch (err) {
      setError("Failed to send code");
    }
    setLoading(false);
  };

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    if (!userId) {
      setError("User not authenticated");
      setLoading(false);
      return;
    }
    try {
      const res = await fetch("/api/auth/verify/check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phoneNumber: `${dialCode}${phoneNumber.replace(/^\+|^0+/, "")}`, code, id: userId }),
      });
      const data = await res.json();
      if (data?.success && data?.data.success) {
        setSuccess(true);
        setError(null);
        router.replace("/account");
      } else {
        setError(data.error || "Invalid code");
      }
    } catch (err) {
      setError("Verification failed");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[url('/assets/auth/background-auth.png')] bg-cover bg-center flex flex-col">
      <Navbar />
      <div className="flex flex-1 items-center justify-center">
        <div className="flex items-center gap-32">
          {/* Left Side (same as SignInBox) */}
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
              Verify your mobile number to secure your personalized wealth management dashboard.
            </p>
            {/* <div className="mt-2 w-full pl-4">
              <p className="text-white/80 text-sm mt-2 mb-4">
                Already verified?
              </p>
              <a
                href="/account"
                className="bg-black/30 text-sm hover:bg-black/40 text-white px-6 py-2 rounded-3xl transition-all duration-200 border border-white/20"
              >
                Go to Account
              </a>
            </div> */}
          </div>

          {/* Right Side (Mobile Verification Form) */}
          <div className={`bg-black/20 backdrop-blur-sm w-[28vw] h-auto min-h-[200px] py-9 px-9 rounded-2xl shadow-lg flex flex-col justify-center border border-white/20 transition-all duration-300 ${sent ? 'scale-105' : ''}`}>
            <form onSubmit={handleSend} className="space-y-4">
              <div className="flex gap-2 items-end">
                <div className="flex flex-col justify-end">
                  <label htmlFor="country" className="block text-xs font-medium text-white mb-1">Country</label>
                  <select
                    id="country"
                    value={country}
                    onChange={e => setCountry(e.target.value)}
                    className="bg-white/10 border border-white/20 rounded-l-lg text-white px-2 py-2 text-base focus:outline-none focus:ring-2 focus:ring-cyan-500 min-w-[110px] h-[44px]"
                    style={{ fontSize: '1.25rem' }}
                  >
                    <option value="IN">🇮🇳 India</option>
                    <option value="AE">🇦🇪 UAE</option>
                    <option value="US">🇺🇸 USA</option>
                    <option value="GB">🇬🇧 UK</option>
                  </select>
                </div>
                <div className="flex-1 flex flex-col justify-end">
                  <label htmlFor="phoneNumber" className="block text-xs font-medium text-white mb-1">Mobile Number</label>
                  <div className="flex">
                    <span className="bg-white/10 border border-white/20 rounded-none rounded-l-lg px-3 py-2 text-white text-base flex items-center h-[44px]">{dialCode}</span>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={phoneNumber}
                      onChange={e => setPhoneNumber(e.target.value.replace(/[^\d]/g, ""))}
                      required
                      className="w-full px-4 py-2 bg-white/5 border-t border-b border-r border-white/20 rounded-r-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500 h-[44px] text-base"
                      placeholder="1234567890"
                      disabled={sent}
                    />
                  </div>
                </div>
              </div>
              {sent && (
                <div className="flex items-center gap-4 mt-2">
                  <div className="text-green-400 text-sm">Code sent successfully!</div>
                  <button
                    type="button"
                    onClick={() => { setSent(false); setPhoneNumber(""); setCode(""); setError(null); setSuccess(false); }}
                    className="text-cyan-400 underline text-xs hover:text-cyan-300"
                  >
                    Edit Number
                  </button>
                  <button
                    type="button"
                    onClick={() => { setSent(false); setTimeout(() => setSent(true), 500); }}
                    className="text-cyan-400 underline text-xs hover:text-cyan-300"
                  >
                    Resend
                  </button>
                </div>
              )}
              {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
              <button
                type="submit"
                disabled={loading || sent}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
              >
                {loading ? "Sending..." : sent ? "Sent" : "Send Code"}
              </button>
            </form>
            {/* Code input always visible at the bottom after send */}
            {sent && !success && (
              <form onSubmit={handleVerify} className="space-y-4 mt-8">
                <div>
                  <label htmlFor="code" className="block text-sm font-medium text-white mb-1">
                    Verification Code
                  </label>
                  <input
                    type="text"
                    id="code"
                    name="code"
                    value={code}
                    onChange={e => setCode(e.target.value)}
                    required
                    className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Enter the code you received"
                  />
                </div>
                {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
                >
                  {loading ? "Verifying..." : "Verify"}
                </button>
              </form>
            )}
            {success && (
              <div className="text-green-600 font-semibold text-lg text-center mt-8">Mobile number verified successfully! Redirecting...</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
