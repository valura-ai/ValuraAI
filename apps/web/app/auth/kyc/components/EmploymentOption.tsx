"use client";
import * as React from "react";

interface EmploymentOptionProps {
  iconSrc: string;
  label: string;
  onClick?: () => void;
  iconClassName?: string;
}

export function EmploymentOption({
  iconSrc,
  label,
  onClick,
  iconClassName = "object-contain shrink-0 w-6 aspect-square",
}: EmploymentOptionProps) {
  return (
    <button
      className="flex gap-6 px-9 py-7 bg-white rounded-[30px] max-md:px-5 w-full text-left text-base text-slate-950 hover:bg-gray-50 transition-colors"
      onClick={onClick}
    >
      <img src={iconSrc} className={iconClassName} alt="" />
      <span className="flex-auto my-auto">{label}</span>
    </button>
  );
}
