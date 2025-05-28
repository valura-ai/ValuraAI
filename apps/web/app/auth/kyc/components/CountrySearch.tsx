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
    <div className="flex gap-2.5 items-center py-5 pr-4 pl-5 text-base bg-white border-solid border-[0.974px] border-zinc-300 rounded-[30px] text-neutral-400">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/fcf1d10d02dd38cd29554c5ec6fa9743603b3823?placeholderIfAbsent=true&apiKey=aace016833d24cbfb6423439ab3bd23b"
        className="object-contain shrink-0 self-stretch my-auto aspect-[0.94] fill-neutral-400 w-[15px]"
        alt="Search icon"
      />
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder={placeholder}
        className="self-stretch my-auto text-neutral-400 bg-transparent border-none outline-none flex-1"
      />
    </div>
  );
};
export default CountrySearch;