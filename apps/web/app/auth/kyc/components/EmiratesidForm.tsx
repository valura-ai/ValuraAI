"use client";
import * as React from "react";

interface EmiratesFormProps {
  onProceed?: () => void;
}

export function EmiratesForm({ onProceed }: EmiratesFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onProceed) onProceed();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col  w-full max-w-sm mx-auto py-10 space-y-6"
    >
      <label
        htmlFor="emirates-id"
        className="text-sm font-medium text-gray-700"
      >
        Type your Emirates ID
      </label>
      <input
        id="emirates-id"
        type="text"
        placeholder="Emirates ID"
        maxLength={20}
        className="w-full px-6 py-3 text-center text-gray-500 border border-zinc-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <button
        type="submit"
        className="w-full py-3 text-white bg-green-600 rounded-full hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      >
        Proceed
      </button>
    </form>
  );
}
