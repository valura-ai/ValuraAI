"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
import { on } from "events";

interface FundingOptionProps {
  icon: string;
  label: string;
  href?: string; // URL to navigate to
  onClick?: () => void;
  className?: string;
  onProceed?: () => void;
}

export function FundingOption({
  icon,
  label,
  href,
  onClick,
  onProceed,
  className = "",
}: FundingOptionProps) {
  const router = useRouter();

  const handleClick = () => {
    if (onProceed) onProceed();
    if (onClick) onClick();
    if (href) router.push(href); // Navigate to the provided URL
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`flex items-center gap-6 px-10 py-7 bg-white rounded-[30px] w-full text-left shadow-sm transition hover:shadow-md max-md:px-5 ${className}`}
    >
      <img
        src={icon}
        alt={`${label} icon`}
        className="w-6 h-6 object-contain shrink-0"
      />
      <span className="flex-1 text-base font-medium text-gray-900">
        {label}
      </span>
    </button>
  );
}
