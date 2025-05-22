"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { format } from "date-fns";

const HomeNavbar = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-[9vh] pl-[5%] pr-[5%] bg-black/30 backdrop-blur-md z-[999] p-5 flex items-center justify-between border-b border-white/20">
      <div className="h-[120%] flex gap-10">
        <img
          src="/assets/valura-logo-with-text.png"
          alt="Logo"
          className="h-[100%] w-auto object-contain"
        />

        {/* Navigation Links */}
        <div className="flex items-center gap-8 text-white">
          <div className="flex items-center gap-1 cursor-pointer hover:text-cyan-400 transition-colors">
            <span>Products</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          <Link
            href="/pricing"
            className="hover:text-cyan-400 transition-colors"
          >
            Pricing
          </Link>
          <Link href="/blog" className="hover:text-cyan-400 transition-colors">
            Blog
          </Link>
          <Link
            href="/support"
            className="hover:text-cyan-400 transition-colors"
          >
            Support
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="bg-[rgba(255,255,255,0.05)] self-stretch flex min-w-60 gap-4 text-sm text-white font-normal leading-none my-auto px-[17px] py-[9px] rounded-full">
          <div className="self-stretch flex items-stretch gap-2">
            <img
              src="/clock-five.svg"
              alt="Clock"
              className="aspect-[1] object-contain w-4 shrink-0"
              style={{
                filter:
                  "invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%)",
              }}
            />
            <div>{format(time, "hh:mm a")} GMT +3</div>
          </div>
          <div className="bg-[rgba(255,255,255,0.2)] flex w-px shrink-0 h-4" />
          <div className="flex items-stretch gap-2">
            <img
              src="/world.svg"
              alt="World"
              className="aspect-[1] object-contain w-4 shrink-0"
              style={{
                filter:
                  "invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%)",
              }}
            />
            <div>{format(time, "hh:mm a")} (Asia/Calcutta)</div>
          </div>
        </div>
        <Link
          href="/contact"
          className="px-6 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full transition-colors duration-200 font-medium"
        >
          Get in touch
        </Link>
      </div>
    </div>
  );
};

export default HomeNavbar;
