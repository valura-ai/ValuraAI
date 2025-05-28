"use client";
import * as React from "react";
import { BackButton } from "./BackButton";
import { AddressForm } from "./AddressForm";
import { CheckboxField } from "./CheckboxField";

interface AddressPageProps {
  onBack?: () => void;
  onProceed?: () => void;
}

export default function AddressPage({ onBack, onProceed }: AddressPageProps) {
  const [isMailingAddress, setIsMailingAddress] = React.useState(false);
  const [hasLivedTwoYears, setHasLivedTwoYears] = React.useState(false);

  const handleBackClick = () => {
    if (onBack) onBack();
  };

  const handleFormSubmit = (data: any) => {
    if (onProceed) onProceed();
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <main className="bg-[#FFFFFC] shadow-xl rounded-[40px] px-14 py-12 w-full max-w-6xl backdrop-blur-[17.247573852539062px] max-md:px-6">
        <div className="px-10 py-16 max-w-full backdrop-blur-[17.247573852539062px] rounded-[40px] w-[1113px] max-md:px-5">
          <div className="flex gap-5 max-md:flex-col">
            <section className="w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col w-full text-slate-950 max-md:mt-10 max-md:max-w-full">
                <BackButton onClick={handleBackClick} />

                <div className="flex flex-col pl-3 mt-20 w-full text-base max-md:mt-10 max-md:max-w-full">
                  <header>
                    <h1 className="text-5xl font-bold max-md:mr-1.5 max-md:text-4xl">
                      What's your legal address?
                    </h1>
                  </header>

                  <p className="mt-3 leading-6">
                    Your legal address will be registered and require verification
                    to open your investment account. <br />
                    <br />
                    You will be automatically enrolled in paperless statements but
                    will receive a notice of account opening once your investment
                    account is set up.
                  </p>

                  <div className="mt-9">
                    <CheckboxField
                      id="mailing-address"
                      label="This is my mailing address"
                      checked={isMailingAddress}
                      onChange={setIsMailingAddress}
                      
                    />

                    <div className="mt-3">
                      <CheckboxField
                        id="lived-two-years"
                        label="I have lived here for at least 2 years"
                        checked={hasLivedTwoYears}
                        onChange={setHasLivedTwoYears}
                      />
                    </div>
                  </div>

                  <p className="mt-8">
                    Note: You may be required to show a proof of address
                  </p>
                </div>
              </div>
            </section>

            <section className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <AddressForm onSubmit={handleFormSubmit} />
            </section>
          </div>

          {/* <button onClick={handleFormSubmit} className="px-16 py-4 mt-9 text-center text-white whitespace-nowrap bg-green-600 rounded-3xl shadow-[0px_4px_19px_rgba(119,147,65,0.3)] max-md:px-5 max-md:max-w-full text-base">
            Proceed
          </button> */}
        </div>
      </main>
    </div>
  );
}
