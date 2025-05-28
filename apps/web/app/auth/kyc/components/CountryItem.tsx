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
    "flex items-center gap-3 px-4 py-2 cursor-pointer rounded-full transition-colors duration-200 w-full max-w-xs";
  const selectedClasses = isSelected
    ? "bg-[#FFFFFC] shadow-sm"
    : "hover:bg-gray-100";

  return (
    <li className={`${baseClasses} ${selectedClasses}`} onClick={onClick}>
      <img
        src={flagSrc}
        className="w-6 h-4 object-cover rounded-sm"
        alt={`${name} flag`}
      />
      <span className="text-sm text-gray-900 font-medium text-left w-[100px] truncate">
        {name}
      </span>
    </li>
  );
};

export default CountryItem;
