"use client";
import * as React from "react";
import { BackButton } from "./BackButton";
import { RequirementItem } from "./RequirementItem";
import { ProceedButton } from "./ProceedButton";

interface IdentityVerificationProps {
  onBack?: () => void;
  onProceed?: () => void;
}

export default function IdentityVerification({ onBack, onProceed }: IdentityVerificationProps) {
  const handleBackClick = () => {
    if (onBack) onBack();
  };

  const handleProceedClick = () => {
    if (onProceed) onProceed();
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
        <main className="bg-white shadow-xl rounded-[40px] px-14 py-12 w-full max-w-6xl backdrop-blur-[17.247573852539062px] max-md:px-6">
        <div className="flex flex-col items-start px-10 pt-9 pb-36 max-w-full backdrop-blur-[17.247573852539062px] rounded-[40px] w-[1112px] max-md:px-5 max-md:pb-24">
            <header className="flex flex-col max-w-full font-bold text-slate-950 w-[797px]">
            <BackButton onClick={handleBackClick} />
            <h2 className="self-end mt-11 text-2xl leading-none max-md:mt-10">
                What you'll need
            </h2>
            </header>

            <section className="mt-6 -mb-7 ml-3.5 max-md:mb-2.5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
                <div className="w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col mt-2 text-slate-950 max-md:mt-10 max-md:max-w-full">
                    <h1 className="text-5xl font-bold max-md:max-w-full max-md:text-4xl">
                    Verify your identity with Persona
                    </h1>
                    <p className="self-start mt-5 text-base leading-6 max-md:max-w-full">
                    Persona powers identity verification for many of the world's
                    largest companies, and is Valura.AI's trusted third party KYC
                    provider who will help verify your identity.
                    </p>
                </div>
                </div>

                <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="w-full text-base text-slate-950 max-md:mt-10 max-md:max-w-full">
                    <RequirementItem
                    icon="https://cdn.builder.io/api/v1/image/assets/TEMP/7ae6106247efc9b27ecfdcf4eba58389e1cabc11?placeholderIfAbsent=true&apiKey=aace016833d24cbfb6423439ab3bd23b"
                    text="Passport/other government ID"
                    />
                    <div className="mt-3">
                    <RequirementItem
                        icon="https://cdn.builder.io/api/v1/image/assets/TEMP/5d9ae0bf2cbe2b5262bd94ec0bf41a548eecd9b5?placeholderIfAbsent=true&apiKey=aace016833d24cbfb6423439ab3bd23b"
                        text="Selfie"
                    />
                    </div>
                    <ProceedButton onClick={handleProceedClick} />
                </div>
                </div>
            </div>
            </section>
        </div>
        </main>
    </div>
  );
}
