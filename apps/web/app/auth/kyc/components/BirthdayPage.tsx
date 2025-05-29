import * as React from "react";
import { BackButton } from "./BackButton";
import { BirthdayPrompt } from "./BirthdayPrompt";
import { BirthdayForm } from "./BirthdayForm";

interface BirthdayPageProps {
  onBack?: () => void;
  onProceed?: () => void;
}

function BirthdayPage({ onBack, onProceed }: BirthdayPageProps) {
  const handleBackClick = () => {
    if (onBack) onBack();
  };
  const handleProceedClick = () => {
    if (onProceed) onProceed();
  };
  return (
    <div className="flex justify-center items-center min-h-screen p-4">
    <main className="bg-[#FFFFFC]/90 shadow-xl rounded-[40px] px-14 py-12 w-full max-w-6xl backdrop-blur-[34.5px] max-md:px-6">
      <div
        className="bg-[#FFFFFC]/90 px-12 py-12 max-w-full backdrop-blur-[34.5px] rounded-[40px] w-[1113px] max-md:px-5"
        style={{ backdropFilter: 'blur(34.5px)' }}
      >
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-start w-full">
              <BackButton onClick={handleBackClick} />
              <BirthdayPrompt />
            </div>
          </div>
          <div className="w-6/12 max-md:w-full mx-auto pt-10 flex justify-center">
            <BirthdayForm onProceed={handleProceedClick} />
          </div>
        </div>
      </div>
    </main>
    </div>
  );
}

export default BirthdayPage;
