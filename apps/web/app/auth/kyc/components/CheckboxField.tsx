"use client";
import * as React from "react";

interface CheckboxFieldProps {
  id: string;
  label: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  icon?: string;
}

export function CheckboxField({
  id,
  label,
  checked = false,
  onChange,
  icon,
}: CheckboxFieldProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.checked);
  };

  return (
    <div className="flex items-center gap-2 text-sm leading-none">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        className="hidden"
      />

      <label htmlFor={id} className="flex items-center gap-2 cursor-pointer">
        {icon ? (
          <img
            src={icon}
            className="object-contain w-4 h-4"
            alt="Checkbox icon"
          />
        ) : (
          <div
            className={`w-4 h-4 rounded-full border border-slate-400 flex items-center justify-center ${
              checked ? "bg-slate-950" : "bg-white"
            }`}
          >
            {checked && (
              <div className="w-2 h-2 bg-white rounded-full" />
            )}
          </div>
        )}
        {label}
      </label>
    </div>
  );
}
