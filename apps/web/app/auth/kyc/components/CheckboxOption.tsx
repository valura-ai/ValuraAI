"use client";
import * as React from "react";

interface CheckboxOptionProps {
  id: string;
  label: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  icon?: string; // optional custom icon URL, if you want
}

export function CheckboxOption({
  id,
  label,
  checked = false,
  onChange,
  icon,
}: CheckboxOptionProps) {
  const handleToggle = () => {
    onChange?.(!checked);
  };

  return (
    <div
      className={`flex gap-6 px-10 pt-4 pb-7 mt-6 bg-white rounded-[30px] cursor-pointer transition border ${
        checked ? "border-[0.5px] border-[#05A049]" : "border-transparent"
      } max-md:px-5`}
      onClick={handleToggle}
    >
      <div className="self-start mt-2.5 w-6 h-6 flex items-center justify-center">
        {checked ? (
          icon ? (
            <img
              src={icon}
              alt="Selected"
              className="w-6 h-6 object-contain"
            />
          ) : (
            // Default green checkmark SVG if no icon URL provided
            <svg
              
              viewBox="0 0 24 24"
              fill="#05A049"
              stroke="none"
              className="w-6 h-6"
            >
              <path d="M9 16.2l-3.5-3.5-1.4 1.4L9 19 20 8l-1.4-1.4z" />
            </svg>
          )
        ) : (
          <div className="w-[21px] h-[21px] bg-zinc-400 rounded-full" />
        )}
      </div>
      <label
        htmlFor={id}
        className="flex-1 text-base font-medium text-gray-900 select-none"
      >
        {label}
      </label>
    </div>
  );
}
