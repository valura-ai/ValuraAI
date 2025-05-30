"use client";
import * as React from "react";
import { EmploymentOption } from "./EmploymentOption";

interface EmploymentStatusSelectorProps {
  onStatusSelect?: (status: string) => void;
  
  
}

export function EmploymentStatusSelector({
  onStatusSelect
}: EmploymentStatusSelectorProps) {
  const employmentOptions = [
    {
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6e02cf7a0e15dc2aeb0a4c5d4e113bb99e15e490?placeholderIfAbsent=true&apiKey=f7cca6aaaeb240aca17eb062f7db0790",
      label: "Employed",
      value: "employed",
    },
    {
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6ce3eb32018263ac7a5feacad339f908aa1945fa?placeholderIfAbsent=true&apiKey=f7cca6aaaeb240aca17eb062f7db0790",
      label: "Self- Employed",
      value: "self-employed",
    },
    {
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/7816982a317e02a7acb86492631a66c8c28f85bf?placeholderIfAbsent=true&apiKey=f7cca6aaaeb240aca17eb062f7db0790",
      label: "Student",
      value: "student",
    },
    {
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/e7176063152f8b281de1641fcc6222fd3378ddeb?placeholderIfAbsent=true&apiKey=f7cca6aaaeb240aca17eb062f7db0790",
      label: "Homemaker",
      value: "homemaker",
    },
    {
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/c7b8c51b72a92d53cb0f3cbc5a0a2db9ac16eb8f?placeholderIfAbsent=true&apiKey=f7cca6aaaeb240aca17eb062f7db0790",
      label: "Unemployed",
      value: "unemployed",
      iconClassName:
        "object-contain shrink-0 aspect-square stroke-[2px] stroke-slate-950 stroke-opacity-80 w-[22px]",
    },
    {
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/9d33979f9dd2e517aa1e16f834eb4a518ada99fb?placeholderIfAbsent=true&apiKey=f7cca6aaaeb240aca17eb062f7db0790",
      label: "Retired",
      value: "retired",
    },
  ];

  const handleOptionClick = (value: string) => {
    onStatusSelect?.(value);
    
    
  };

  return (
    <section className="w-full text-base text-slate-950 max-md:mt-10 max-md:max-w-full">
      <div className="space-y-9">
        {employmentOptions.map((option, index) => (
          <EmploymentOption
            key={option.value}
            iconSrc={option.iconSrc}
            label={option.label}
            iconClassName={option.iconClassName}
            onClick={() => handleOptionClick(option.value)}
          />
        ))}
      </div>
    </section>
  );
}
