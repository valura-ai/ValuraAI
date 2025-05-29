import * as React from "react";
import { BackButton } from "./BackButton";
import { EmiratesPrompts } from "./EmiratesPrompt";
import { EmiratesForm } from "./EmiratesidForm";

interface EmiratesPageProps {
  onBack?: () => void;
  onProceed?: () => void;
}

function EmiratesPage({ onBack, onProceed }: EmiratesPageProps) {
  const handleBackClick = () => {
    if (onBack) onBack();
  };
  const handleProceedClick = () => {
    if (onProceed) onProceed();
  };
  return (
    <div className="flex justify-center items-center min-h-screen p-4">
    <main className="bg-[#FFFFFC]/90 shadow-xl rounded-[40px] px-14 py-12 w-full max-w-[1112.95px] h-[599.24px] backdrop-blur-[34.5px] max-md:px-6">
      <div
        className="px-12 py-12 max-w-full backdrop-blur-[17.247573852539062px] rounded-[40px] w-[1113px] max-md:px-5"
        style={{ backdropFilter: 'blur(17.247573852539062px)' }}
      >
        <div className="flex gap-32 max-md:flex-col">
          <div className="w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-start w-full">
              <BackButton onClick={handleBackClick} />
              <EmiratesPrompts />
            </div>
          </div>
          <div className="w-6/12 max-md:w-full mx-auto pt-20 flex justify-center">
            <EmiratesForm onProceed={handleProceedClick} />
          </div>
        </div>
      </div>
    </main>
    </div>
  );
}

export default EmiratesPage;
