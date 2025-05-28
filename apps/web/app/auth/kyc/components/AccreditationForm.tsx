"use client";
import * as React from "react";
import { AccreditationSection } from "./AccreditationSection";
import { InvestorQualifications } from "./InvestorQualification";

interface AccreditationFormProps {
  onProceed?: () => void;
  onBack?: () => void;
}

export default function AccreditationForm({ onProceed, onBack }: AccreditationFormProps) {
  const handleSubmit = () => {
    if (onProceed) onProceed();
  };

  const handleSelectionChange = (selections: Record<string, boolean>) => {
    console.log("Selections changed:", selections);
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <main className="bg-white shadow-xl rounded-[40px] px-14 py-12 w-full max-w-6xl backdrop-blur-[17.247573852539062px] max-md:px-6">
        <div className="px-10 pt-11 pb-16 max-w-full backdrop-blur-[17.247573852539062px] rounded-[40px] w-[1132px] max-md:px-5">
          <div className="flex gap-5 max-md:flex-col">
            <AccreditationSection
              onSubmit={handleSubmit}
              onBack={onBack}
            />
            <InvestorQualifications
              onSelectionChange={handleSelectionChange}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
