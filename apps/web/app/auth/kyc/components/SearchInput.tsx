import React from "react";

function SearchInput() {
  return (
    <div className="absolute left-5 h-[54px] top-[18px] w-[311px] max-sm:w-[calc(100%_-_40px)]">
      <div className="relative w-full h-full">
        <svg
          width="312"
          height="55"
          viewBox="0 0 312 55"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <rect
            x="0.987168"
            y="1.37779"
            width="310.026"
            height="53.1017"
            rx="26.5509"
            fill="#FFFFFC"
          />
          <rect
            x="0.987168"
            y="1.37779"
            width="310.026"
            height="53.1017"
            rx="26.5509"
            stroke="#D8DADC"
            strokeWidth="0.974335"
          />
          <path
            d="M26.8666 32.7465C28.2491 32.7465 29.5241 32.3037 30.5673 31.5656L34.4915 35.4527C34.6737 35.6331 34.9137 35.7233 35.1704 35.7233C35.7085 35.7233 36.0894 35.3133 36.0894 34.7885C36.0894 34.5424 36.0066 34.3046 35.8244 34.1324L31.925 30.2617C32.7446 29.1956 33.2331 27.8753 33.2331 26.4402C33.2331 22.9714 30.3686 20.134 26.8666 20.134C23.3728 20.134 20.5 22.9632 20.5 26.4402C20.5 29.9091 23.3645 32.7465 26.8666 32.7465ZM26.8666 31.3852C24.1345 31.3852 21.8743 29.1464 21.8743 26.4402C21.8743 23.734 24.1345 21.4953 26.8666 21.4953C29.5986 21.4953 31.8588 23.734 31.8588 26.4402C31.8588 29.1464 29.5986 31.3852 26.8666 31.3852Z"
            fill="#8A8A8F"
          />
        </svg>
        <input
          type="text"
          placeholder="Search"
          className="absolute top-0 left-0 w-full h-full pl-[45px] pr-4 rounded-[26.5509px] text-[15.5894px] text-[#8A8A8F] focus:outline-none bg-transparent"
          aria-label="Search for a country"
        />
      </div>
    </div>
  );
}

export default SearchInput;
