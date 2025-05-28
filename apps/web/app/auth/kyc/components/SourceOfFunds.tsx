"use client";
import * as React from "react";
import { BackButton } from "./BackButton";
import { FundingOption } from "./FundingOption";

interface SourceOfFundsFormProps {
  onBack?: () => void;
}

export function SourceOfFundsForm({ onBack }: SourceOfFundsFormProps) {
  const handleBackClick = () => {
    if (onBack) onBack();
  };

  const handleOptionClick = (option: string) => {
    // Handle option selection
    console.log(`Selected option: ${option}`);
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
    <div className="bg-white shadow-xl rounded-[40px] px-14 py-12 w-full max-w-6xl backdrop-blur-[17.247573852539062px] max-md:px-6">
      <div className="flex gap-5 max-md:flex-col">
        <div className="w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col w-full text-slate-950 max-md:mt-10 max-md:max-w-full">
            <BackButton onClick={handleBackClick} />

            <section className="flex flex-col pl-3.5 mt-24 max-md:mt-10 max-md:max-w-full">
              <h1 className="text-5xl font-bold max-md:max-w-full max-md:text-4xl">
                What is your source of funds?
              </h1>
              <p className="self-start mt-3 text-base leading-6 max-md:max-w-full">
                We need to know how you acquired the money for your
                investments in order to keep you and Valura.AI safe
              </p>
            </section>
          </div>
        </div>

        <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="mt-12 w-full text-base text-slate-950 max-md:mt-10 max-md:max-w-full">
            <div className="space-y-9">
              <FundingOption
                icon="https://cdn.builder.io/api/v1/image/assets/TEMP/7e54bea0cbe8c3ee65b374ca5fdc69c5389ff97b?placeholderIfAbsent=true&apiKey=f7cca6aaaeb240aca17eb062f7db0790"
                label="Income"
                onClick={() => handleOptionClick("Income")}
              />

              <FundingOption
                icon="https://cdn.builder.io/api/v1/image/assets/TEMP/eb09b5ef8f95816e4044ce8b9c669cf90e7cb4b8?placeholderIfAbsent=true&apiKey=f7cca6aaaeb240aca17eb062f7db0790"
                label="Investments"
                onClick={() => handleOptionClick("Investments")}
                className="py-8 gap-7 px-11"
              />

              <FundingOption
                icon="https://cdn.builder.io/api/v1/image/assets/TEMP/defed331566a35d32e4c9b38c1c199b460e6b1cb?placeholderIfAbsent=true&apiKey=f7cca6aaaeb240aca17eb062f7db0790"
                label="Inheritance"
                onClick={() => handleOptionClick("Inheritance")}
              />

              <button
                className="px-16 py-8 whitespace-nowrap bg-white rounded-[30px] max-md:px-5 max-md:max-w-full w-full text-left text-base text-slate-950"
                onClick={() => handleOptionClick("Others")}
              >
                Others
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
