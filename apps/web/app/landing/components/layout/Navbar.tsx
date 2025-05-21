"use client";

import React from "react";
import { format } from "date-fns";

const Navbar = () => {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <nav className="relative bg-[rgba(0,0,0,0.2)] self-stretch flex w-full flex-col items-center justify-center px-[70px] py-4 border-[rgba(255,255,255,0.25)] border-b max-md:max-w-full max-md:px-5">
      <div className="flex w-full max-w-[1537px] items-stretch gap-5 flex-wrap justify-between max-md:max-w-full">
        <div className="flex items-center gap-[33px] text-base text-white font-normal flex-wrap my-auto max-md:max-w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/ca7ec7c7d94147318bebe8b1c8ccdcac/fcab38a6c37920ff856346db733dd47b127041d4?placeholderIfAbsent=true"
            alt="Fundora Logo"
            className="aspect-[4.13] object-contain w-[120px] self-stretch shrink-0 max-w-full"
          />
          <div className="self-stretch flex items-stretch gap-1 whitespace-nowrap text-center my-auto">
            <button className="grow">Products</button>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/ca7ec7c7d94147318bebe8b1c8ccdcac/4f1cbcd5557447a9654866e14959d526ea68d007?placeholderIfAbsent=true"
              alt="Dropdown"
              className="aspect-[1] object-contain w-4 shrink-0 mt-1"
            />
          </div>
          <div className="self-stretch flex items-stretch gap-[34px] my-auto">
            <button>Plan and Pricing</button>
            <button>Blog</button>
            <button>Support</button>
          </div>
        </div>
        <div className="flex items-center gap-6 flex-wrap">
          <div className="bg-[rgba(255,255,255,0.05)] self-stretch flex min-w-60 gap-4 text-sm text-white font-normal leading-none w-[395px] my-auto px-[17px] py-[9px] rounded-full">
            <div className="self-stretch flex items-stretch gap-2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/ca7ec7c7d94147318bebe8b1c8ccdcac/06f813e24c48de57f86ce48e229e0ac28367be3a?placeholderIfAbsent=true"
                alt="Clock"
                className="aspect-[1] object-contain w-4 shrink-0"
              />
              <div>{format(time, "HH:mm a")} GMT +3</div>
            </div>
            <div className="bg-[rgba(255,255,255,0.2)] flex w-px shrink-0 h-4" />
            <div className="flex items-stretch gap-2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/ca7ec7c7d94147318bebe8b1c8ccdcac/6fb81ccbb790eaf747c52e08504db141bd3177a1?placeholderIfAbsent=true"
                alt="Clock"
                className="aspect-[1] object-contain w-4 shrink-0"
              />
              <div>{format(time, "HH:mm a")} (Asia/Calcutta)</div>
            </div>
          </div>
          <button className="bg-cyan-400 self-stretch text-base text-black font-semibold text-center w-[101px] my-auto px-[21px] py-[13px] rounded-full max-md:pl-5">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
