import * as React from "react";

interface InputFieldProps {
  placeholder: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export function InputField({ placeholder, value, onChange, className = "" }: InputFieldProps) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      className={`px-6 py-6 bg-white border-solid border-[0.986px] border-[color:var(--element,#ADADAD)] rounded-[30px] text-neutral-400 max-md:px-5 max-md:max-w-full ${className}`}
    />
  );
}
