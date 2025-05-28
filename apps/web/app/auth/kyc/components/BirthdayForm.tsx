"use client";
import * as React from "react";

interface BirthdayFormProps {
  onProceed?: () => void;
}

export function BirthdayForm({ onProceed }: BirthdayFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onProceed) onProceed();
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="self-stretch my-auto w-full text-center whitespace-nowrap max-md:mt-10 max-md:max-w-full"
    >
      <div className="flex gap-3 text-base leading-none text-neutral-400 tracking-wide justify-center">
        <input
          type="text"
          placeholder="DD"
          maxLength={2}
          className="w-16 px-5 py-2 bg-white border border-solid border-zinc-400 rounded-full text-neutral-400 text-center"
        />
        <input
          type="text"
          placeholder="MM"
          maxLength={2}
          className="w-16 px-5 py-2 bg-white border border-solid border-zinc-400 rounded-full text-neutral-400 text-center"
        />
        <input
          type="text"
          placeholder="YYYY"
          maxLength={4}
          className="w-24 px-5 py-2 bg-white border border-solid border-zinc-400 rounded-full text-neutral-400 text-center"
        />
      </div>
      <button
        type="submit"
        className="px-26 py-2 mt-4 text-sm text-white bg-green-600 rounded-full shadow-md max-md:px-5 max-md:max-w-full"
      >
        Proceed
      </button>
    </form>
  );
}
