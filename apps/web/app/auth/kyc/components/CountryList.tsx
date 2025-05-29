"use client";
import React, { useState } from "react";
import { CountryItem } from "./CountryItem";
import { CountrySearch } from "./CountrySearch";
import countries from "../data/allCountries"; // Path to your all-country list file

interface Country {
  id: string; 
  name: string;
  flagSrc: string;
}

interface CountryListProps {
  onCountrySelect?: (country: Country) => void;
  selectedCountryId?: string;
}

export const CountryList: React.FC<CountryListProps> = ({
  onCountrySelect,
  selectedCountryId = "ae", // Default to UAE (ISO: "ae")
}) => {
  const [filteredCountries, setFilteredCountries] = useState<Country[]>(countries);

  const handleSearch = (query: string) => {
    const filtered = countries.filter((country) =>
      country.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCountries(filtered);
  };

  const handleCountryClick = (country: Country) => {
    onCountrySelect?.(country);
  };

  return (
    <section className="flex overflow-hidden gap-4 px-4 pt-5 text-xl leading-none rounded-[40px] text-slate-950 min-h-[420px] h-[420px] bg-[#FFFFFC]/90">
      <div className="grow shrink-0 basis-0 w-full bg-gray-100 border border-white rounded-3xl min-h-[400px] h-[400px] flex flex-col">
        <CountrySearch onSearch={handleSearch} />

        <div className="mt-6 max-h-[300px] h-[220px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent pr-2 flex-1">
          <ul className="space-y-4 flex flex-col items-center min-h-[200px] h-full">
            {filteredCountries.map((country) => (
              <CountryItem
                key={country.id}
                flagSrc={country.flagSrc}
                name={country.name}
                isSelected={country.id === selectedCountryId}
                onClick={() => handleCountryClick(country)}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CountryList;
