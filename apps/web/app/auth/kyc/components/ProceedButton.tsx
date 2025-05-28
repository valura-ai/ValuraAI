"use client";
import * as React from "react";

interface ProceedButtonProps {
  onClick?: () => void;
}

export function ProceedButton({ onClick }: ProceedButtonProps) {
  return (
    <button
      className="px-16 py-4 mt-9 text-center text-white whitespace-nowrap bg-green-600 rounded-3xl shadow-[0px_4px_19px_rgba(119,147,65,0.3)] max-md:px-5 max-md:max-w-full text-base"
      onClick={onClick}
    >
      Proceed
    </button>
  );
}
