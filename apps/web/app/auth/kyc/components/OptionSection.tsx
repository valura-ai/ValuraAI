"use client";
import React from 'react';
import { OptionCard } from './OptionCard';

interface OptionsSectionProps {
  selectedValue: string;
  onValueChange: (value: string) => void;
}

export const OptionsSection: React.FC<OptionsSectionProps> = ({
  selectedValue,
  onValueChange
}) => {
  const options = [
    {
      id: 'not-pep',
      value: 'no',
      label: "No, I'm not a politically exposed person.",
      iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/63c213cfa271d8a085e1b97fc963b4cab118624a?placeholderIfAbsent=true'
    },
    {
      id: 'is-pep',
      value: 'yes',
      label: 'Yes, a close family member or I are a politically exposed person.',
      iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ede9a9efadbb9398ba2b276814564333b1dcfbc8?placeholderIfAbsent=true'
    }
  ];

  return (
    <fieldset className="w-full text-base text-[#00111b] font-normal max-md:max-w-full max-md:mt-10">
      <legend className="sr-only">
        Select your politically exposed person status
      </legend>
      
      <div className="space-y-9">
        {options.map((option, index) => (
          <div key={option.id} className={index === 0 ? '' : 'mt-9'}>
            <OptionCard
              id={option.id}
              value={option.value}
              label={option.label}
              checked={selectedValue === option.value}
              onChange={onValueChange}
              iconSrc={option.iconSrc}
            />
          </div>
        ))}
      </div>
    </fieldset>
  );
};