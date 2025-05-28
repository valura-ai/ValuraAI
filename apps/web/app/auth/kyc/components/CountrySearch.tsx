"use client";
import React, { useState } from 'react';

interface CountrySearchProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
}

export const CountrySearch: React.FC<CountrySearchProps> = ({
  onSearch,
  placeholder = "Search"
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearch?.(value);
  };

  return (
    <div className="pt-4 pl-4"> {/* Apply upper and left padding here */}
      <div className="flex items-center gap-3 px-5 py-3 bg-white border border-zinc-300 rounded-full w-full max-w-sm">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/fcf1d10d02dd38cd29554c5ec6fa9743603b3823?placeholderIfAbsent=true&apiKey=aace016833d24cbfb6423439ab3bd23b"
          className="w-4 h-4 object-contain"
          alt="Search icon"
        />
        <input
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder={placeholder}
          className="flex-1 bg-transparent text-sm text-gray-700 placeholder:text-neutral-400 outline-none"
        />
      </div>
    </div>
  );
};

export default CountrySearch;
