"use client";
import * as React from "react";
import { CheckboxOption } from "./CheckboxOption";

interface InvestorQualificationsProps {
  onSelectionChange?: (selections: Record<string, boolean>) => void;
}

export function InvestorQualifications({ onSelectionChange }: InvestorQualificationsProps) {
  const [selections, setSelections] = React.useState({
    income300k: true, // First option is pre-selected based on design
    assets1m: false,
    personalAssets2m: false,
    investments5m: false,
  });

  const handleSelectionChange = (key: string, checked: boolean) => {
    const newSelections = { ...selections, [key]: checked };
    setSelections(newSelections);
    onSelectionChange?.(newSelections);
  };

  return (
    <section className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col mt-7 w-full text-base text-slate-950 max-md:mt-10 max-md:max-w-full">
        <header>
          <h2 className="self-start text-2xl font-bold leading-none text-black">
            ACCREDITED INVESTOR
          </h2>
          <p className="self-start mt-2">
            Select all that apply
          </p>
        </header>

        <CheckboxOption
          id="income300k"
          label="My income was $300,000 or above in the last 12 months."
          checked={selections.income300k}
          onChange={(checked) => handleSelectionChange('income300k', checked)}
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/e63aac1bb499830065b7865fce915673d2d3fcf2?placeholderIfAbsent=true&apiKey=f7cca6aaaeb240aca17eb062f7db0790"
        />

        <CheckboxOption
          id="assets1m"
          label="My financial assets exceeds $1 million."
          checked={selections.assets1m}
          onChange={(checked) => handleSelectionChange('assets1m', checked)}
        />

        <CheckboxOption
          id="personalAssets2m"
          label="My personal assets (including property) exceed $2 million."
          checked={selections.personalAssets2m}
          onChange={(checked) => handleSelectionChange('personalAssets2m', checked)}
        />

        <header className="mt-12 max-md:mt-10">
          <h2 className="self-start text-2xl font-bold leading-none text-black">
            QUALIFIED PURCHASER
          </h2>
          <p className="mt-2 mr-11 leading-6 max-md:mr-2.5 max-md:max-w-full">
            Some products on Arta are only available to Qualified Purchasers.
          </p>
        </header>

        <CheckboxOption
          id="investments5m"
          label="My investments exceed USD $5M."
          checked={selections.investments5m}
          onChange={(checked) => handleSelectionChange('investments5m', checked)}
        />
      </div>
    </section>
  );
}
