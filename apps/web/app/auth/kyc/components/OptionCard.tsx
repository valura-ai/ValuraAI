"use client";
import React from 'react';

interface OptionCardProps {
  id: string;
  value: string;
  label: string;
  checked: boolean;
  onChange: (value: string) => void;
  iconSrc: string;
}

export const OptionCard: React.FC<OptionCardProps> = ({
  id,
  value,
  label,
  checked,
  onChange,
  iconSrc
}) => {
  return (
    <label
      htmlFor={id}
      className={`bg-white flex items-stretch gap-5 justify-between px-[31px] py-[26px] rounded-[30px] cursor-pointer transition-all hover:shadow-md max-md:max-w-full max-md:px-5 ${
        checked ? 'ring-2 ring-blue-500' : ''
      }`}
    >
      <input
        type="radio"
        id={id}
        name="pepStatus"
        value={value}
        checked={checked}
        onChange={(e) => onChange(e.target.value)}
        className="sr-only"
      />
      <span className="grow shrink basis-auto text-base text-[#00111b] font-normal">
        {label}
      </span>
      <img
        src={iconSrc}
        className="aspect-[0.54] object-contain w-[7px] stroke-[1px] stroke-[rgba(0,17,27,0.80)] shrink-0 my-auto"
        alt=""
        role="presentation"
      />
    </label>
  );
};