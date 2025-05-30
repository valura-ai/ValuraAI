"use client";
import * as React from "react";
import { BackButton } from "./BackButton";
import { EmploymentStatusSelector } from "./EmploymentStatusSelector";

interface EmploymentStatusFormProps {
  onBack?: () => void;
  onProceed?: () => void;
  onStatusSelect?: (status: string) => void;
}

export function EmploymentStatusForm({
  onBack,
  onStatusSelect, onProceed,
}: EmploymentStatusFormProps) {
  const handleClick = () => {
    if (onProceed) {
      onProceed();
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen p-4">
    <main className="bg-[#FFFFFC]/90 shadow-xl rounded-[40px] px-14 py-12 w-full max-w-6xl backdrop-blur-[17.247573852539062px] max-md:px-6">
      <div className="px-11 py-14 max-w-full backdrop-blur-[17.247573852539062px] rounded-[40px] w-[1132px] max-md:px-5">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col w-full font-bold text-slate-950 max-md:mt-10 max-md:max-w-full">
              <BackButton onClick={onBack} />
              <h1 className="mt-48 ml-3.5 text-5xl max-md:mt-10 max-md:max-w-full max-md:text-4xl">
                What is your Employment Status?
              </h1>
            </div>
          </div>
          <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <EmploymentStatusSelector onStatusSelect={onStatusSelect} />
          </div>
          <br />
          <button className="px-8 py-8 whitespace-nowrap bg-white rounded-[30px] max-md:px-5 max-md:max-w-full w-full text-left text-base text-slate-950" onClick={handleClick}></button>
         
        </div>
      </div>
    </main>
    </div>
  );
}

export default EmploymentStatusForm;
