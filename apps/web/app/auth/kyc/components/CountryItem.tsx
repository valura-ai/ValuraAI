import React from 'react';

interface CountryItemProps {
  flagSrc: string;
  name: string;
  isSelected?: boolean;
  onClick?: () => void;
}

export const CountryItem: React.FC<CountryItemProps> = ({
  flagSrc,
  name,
  isSelected = false,
  onClick
}) => {
  const baseClasses =
    "flex gap-5 px-20 py-3 border border-zinc-300 rounded-xl max-w-[250px] w-full cursor-pointer transition-colors";
  const selectedClasses = isSelected ? "bg-white" : "hover:bg-gray-16";

  return (
    <li className={`${baseClasses} ${selectedClasses}`} onClick={onClick}>
      <img
        src={flagSrc}
        className="object-contain shrink-0 w-6 aspect-[1.33]"
        alt={`${name} flag`}
      />
      <span className="text-slate-950 text-sm leading-none truncate">
        {name}
      </span>
    </li>
  );
};

export default CountryItem;
