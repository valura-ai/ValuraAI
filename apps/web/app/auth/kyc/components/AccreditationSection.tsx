"use client";
import * as React from "react";
import { BackButton } from "./BackButton";

interface AccreditationSectionProps {
  onBack?: () => void;
  onSubmit?: () => void;
}

export function AccreditationSection({ onBack, onSubmit }: AccreditationSectionProps) {
  return (
    <section className="w-6/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col w-full text-slate-950 max-md:mt-10 max-md:max-w-full">
        <BackButton onClick={onBack} />

        <div className="flex flex-col items-start pl-3.5 mt-40 text-base max-md:mt-10 max-md:max-w-full">
          <header>
            <h1 className="self-stretch text-5xl font-bold max-md:max-w-full max-md:text-4xl">
              What is your accreditation level?
            </h1>
          </header>

          <p className="mt-3 leading-6 max-md:max-w-full">
            To use Valura.AI, you have to be considered an accredited
            investor by the Monetary Authority of UAE (MAUAE), and you'll
            be agreeing to this{" "}
            <span style={{color: "rgba(0,158,73,1)"}}>
              Accredited Investor Declaration and Opt-In
            </span>
          </p>

          <button
            onClick={onSubmit}
            className="px-16 py-4 mt-9 max-w-full text-center text-white whitespace-nowrap bg-green-600 rounded-3xl shadow-[0px_4px_19px_rgba(119,147,65,0.3)] w-[444px] max-md:px-5"
          >
            Submit
          </button>
        </div>
      </div>
    </section>
  );
}
