"use client";
import React from "react";
import { useState } from "react";
import CitizenshipForm from "./components/CitizenshipForm";
import AddressPage from "./components/AddressPage";
import IdentityVerification from "./components/IdentityVerification";
// import BackgroundSvg from "./components/BackgroundGradient";
import BirthdayPage from "./components/BirthdayPage";
import EmiratesPage from "./components/EmiratesidPage";
import { SourceOfFundsForm } from "./components/SourceOfFunds";
import AccreditationForm from "./components/AccreditationForm";

export default function Home() {
  const [step, setStep] = useState(1);

  const handleBack = () => {
    setStep((prev) => (prev > 1 ? prev - 1 : prev));
  };
  const handleProceed = () => {
    setStep((prev) => (prev < 7 ? prev + 1 : prev));
  };

  return (
    <div>
      <div className="relative z-10">
        {step === 1 && (
          <CitizenshipForm onBack={handleBack} onProceed={handleProceed} />
        )}
        {step === 2 && (
          <AddressPage onBack={handleBack} onProceed={handleProceed} />
        )}
        {step === 3 && (
          <BirthdayPage onBack={handleBack} onProceed={handleProceed} />
        )}
        {step === 4 && (
          <EmiratesPage onBack={handleBack} onProceed={handleProceed} />
        )}
        {step === 5 && (
          <IdentityVerification onBack={handleBack} onProceed={handleProceed} />
        )}
        {step === 6 && <AccreditationForm onProceed={handleProceed} onBack={handleBack} />}
        {step === 7 && <SourceOfFundsForm onBack={handleBack} />}
      </div>
    </div>
  );
}
