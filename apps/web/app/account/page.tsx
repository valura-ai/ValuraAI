"use client";
import { useEffect, useState } from "react";
import { handleSignOutAction } from "@web/api/handler/signout";
import { Navbar } from "@web/components/Navbar";
import Footer from "@web/landing/components/layout/Footer";
import { User } from "lucide-react";


export default function AccountPage() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch("/api/user");
        if (!res.ok) throw new Error("Failed to fetch user");
        const data = await res.json();
        setUser(data.data);
      } catch (err: any) {
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    }
    fetchUser();
  }, []);

  const userFields = user
    ? [
        ["User ID (Postgres)", user.id],
        ["WorkOS ID", user.workosId],
        ["First name", user.firstName],
        ["Last name", user.lastName],
        ["Email", user.email],
        ["KYC status", user.kycStatus],
      ].filter((arr) => arr[1])
    : [];

  function getKycStatusColor(status: string) {
    if (status === "DONE") return "bg-green-100 text-green-700 border-green-400";
    if (status === "PENDING") return "bg-yellow-100 text-yellow-700 border-yellow-400";
    return "bg-gray-100 text-gray-700 border-gray-300";
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
        <div className="w-full max-w-md bg-white rounded-xl shadow p-8 flex flex-col items-center">
          <h1 className="text-3xl font-bold mb-4 text-center">Account details</h1>
          <p className="text-lg text-gray-700 mb-8 text-center">
            Below are your account details
          </p>
          {loading && <div>Loading...</div>}
          {error && <div className="text-red-500">{error}</div>}
          {!loading && !error && userFields.length > 0 && (
            <div className="flex flex-col gap-4 w-full">
              {userFields.map(([label, value]) => (
                <div className="flex items-center gap-4" key={String(label)}>
                  <span className="font-semibold w-32 text-gray-800">{label}</span>
                  {label === "KYC status" ? (
                    <span
                      className={`flex-1 border rounded px-3 py-2 font-semibold ${getKycStatusColor(String(value))}`}
                    >
                      {String(value)}
                    </span>
                  ) : (
                    <input
                      className="flex-1 border border-gray-300 rounded px-3 py-2 bg-gray-100 text-gray-700"
                      value={String(value) || ""}
                      readOnly
                    />
                  )}
                </div>
              ))}
            </div>
          )}
          <form
            action={handleSignOutAction}
            className="w-full mt-8 flex justify-center"
          >
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded-full transition cursor-pointer"
            >
              Sign out
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
