"use client";
import * as React from "react";

interface BackButtonProps {
  onClick?: () => void;
}

export function BackButton({ onClick }: BackButtonProps) {
  return (
    <button
      className="flex gap-2 justify-center self-start px-7 py-5 text-xl leading-none text-center whitespace-nowrap border border-solid bg-green-600 bg-opacity-0 border-[color:var(--Correct-text,rgba(0,17,27,0.80))] rounded-[40px] max-md:px-5 font-bold text-slate-950"
      onClick={onClick}
    >
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/36b82c89d4f336efdcf44432bdb0ba07961c321f?placeholderIfAbsent=true&apiKey=f7cca6aaaeb240aca17eb062f7db0790"
        className="object-contain shrink-0 my-auto w-4 aspect-square"
        alt="Back arrow"
      />
      <span>Back</span>
    </button>
  );
}
