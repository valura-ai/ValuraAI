import * as React from "react";

export function BirthdayPrompt() {
  return (
    <section className="flex flex-col items-start w-full text-base font-bold leading-6 text-slate-950 max-md:mt-10 max-md:max-w-full">
      <h1 className="mt-24 text-5xl max-md:mt-10 max-md:text-4xl">
        When's your birthday?
      </h1>
      <p className="self-stretch mt-3 font-normal text-sm text-slate-700 max-md:max-w-full">
        Use the date of birth as written on your government-issued identification.
      </p>
      <p className="mt-11 w-[347px] font-normal text-sm text-slate-700 max-md:mt-10">
        Valura.AI is required to collect this to determine investment eligibility.
      </p>

    </section>
  );
}
