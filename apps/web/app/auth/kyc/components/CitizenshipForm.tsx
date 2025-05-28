"use client";
import React, { useState } from 'react';
import { BackButton } from './BackButton';
import { CountryList } from './CountryList';
import { AcceptButton } from './AcceptButton';

interface Country {
  id: string;
  name: string;
  flagSrc: string;
}

interface CitizenshipFormProps {
  onBack?: () => void;
  onProceed?: () => void;
}

export const CitizenshipForm: React.FC<CitizenshipFormProps> = ({ onBack, onProceed }) => {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  const handleBackClick = () => {
    if (onBack) onBack();
  };

  const handleCountrySelect = (country: Country) => {
    setSelectedCountry(country);
  };

  const handleAccept = () => {
    if (selectedCountry && onProceed) {
      onProceed();
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <main className="bg-[#FFFFFC] shadow-xl rounded-[40px] px-14 py-12 w-full max-w-6xl backdrop-blur-[17.247573852539062px] max-md:px-6">
        <div className="flex gap-5 max-md:flex-col">
          <section className="w-[55%] max-md:w-full">
            <div className="flex flex-col w-full text-base font-bold leading-6 text-slate-950 max-md:mt-6">
              <BackButton onClick={handleBackClick} />

              <header className="mt-20 max-md:mt-10">
                <h1 className="text-5xl max-md:text-4xl max-md:leading-tight">
                  Which country are you a citizen of?
                </h1>
                <p className="mt-3 text-base font-normal">
                  This data is encrypted, never sold or traded, and only used by
                  Valura.AI and our partners to provide you with services you request.
                </p>
              </header>

              <footer className="mt-24 max-md:mt-10">
                <p className="text-sm font-normal">
                  <a
                    href="#"
                    className="text-green-600 hover:underline"
                  >
                    Learn more
                  </a>{' '}
                  here about how we protect your privacy and keep you and your data safe
                </p>
              </footer>
            </div>
          </section>

          <aside className="w-[45%] max-md:w-full">
            <div className="mt-1.5 max-md:mt-10">
              <CountryList
                onCountrySelect={handleCountrySelect}
                selectedCountryId={selectedCountry?.id || 'uae'}
              />
              <AcceptButton
                onClick={handleAccept}
                disabled={!selectedCountry}
              />
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default CitizenshipForm;
