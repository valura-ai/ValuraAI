"use client";
import * as React from "react";

interface BirthdayFormProps {
  onProceed?: () => void;
}

export function BirthdayForm({ onProceed }: BirthdayFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onProceed?.();
  };

  const inputClass =
    "text-center text-sm text-gray-500 placeholder-gray-400 bg-white border border-gray-300 rounded-3xl py-4 px-8 focus:outline-none";

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center space-y-6 max-w-xs mx-auto w-full"
    >
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="flex gap-4 justify-center w-full">
        <input
          type="text"
          placeholder="DD"
          maxLength={2}
          className={`${inputClass} w-20`} // Increased from w-16
        />
        <input
          type="text"
          placeholder="MM"
          maxLength={2}
          className={`${inputClass} w-20`} // Increased from w-16
        />
        <input
          type="text"
          placeholder="YYYY"
          maxLength={4}
          className={`${inputClass} w-32`} // Increased from w-24
        />
      </div>

      <button
        type="submit"
        className="w-full py-3 text-white text-sm bg-green-600 rounded-full hover:bg-green-700 transition"
      >
        Proceed
      </button>
    </form>
  );
}
