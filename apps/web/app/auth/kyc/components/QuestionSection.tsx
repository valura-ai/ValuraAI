"use client";
import React from 'react';
import { BackButton } from './BackButton';

interface QuestionSectionProps {
  onBackClick?: () => void;
}

export const QuestionSection: React.FC<QuestionSectionProps> = ({ onBackClick }) => {
  return (
    <section className="flex w-full flex-col items-stretch text-[#00111b] max-md:max-w-full max-md:mt-10">
      <BackButton onClick={onBackClick} />
      
      <div className="flex flex-col items-stretch mt-[98px] pl-[13px] max-md:max-w-full max-md:mt-10">
        <h1 className="text-5xl font-bold max-md:max-w-full max-md:text-[40px]">
          Are you a politically exposed person?
        </h1>
        <p className="text-base font-normal leading-6 mt-3 max-md:max-w-full">
          Have you or your close family been entrusted with prominent
          public functions in Singapore or a foreign Country?
        </p>
      </div>
    </section>
  );
};
