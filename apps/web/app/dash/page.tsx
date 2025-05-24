"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { handleSignOut } from "../lib/cognito-actions";

export default function LandingPage() {
  const router = useRouter();

  const onSignOut = async () => {
    const redirectPath = await handleSignOut();
    router.push(redirectPath);
  };

  return (
    <div className="bg-white flex flex-col items-stretch pb-[27px]">
      <div className="flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">DASHBOARD</h1>
        <button
          onClick={onSignOut}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}
