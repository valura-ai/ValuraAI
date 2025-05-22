import React from "react";
import HomeNavbar from "./landing/components/layout/HomeNavbar";
import Hero from "./landing/components/sections/Hero";
import Features from "./landing/components/sections/Features";
import About from "./landing/components/sections/About";
import Blog from "./landing/components/sections/Blog";
import FAQ from "./landing/components/sections/FAQ";
import Footer from "./landing/components/layout/Footer";

export default function LandingPage() {
  return (
    <div className="bg-white flex flex-col items-stretch pb-[27px]">
      <div className="flex w-full flex-col items-stretch max-md:max-w-full">
        <div className="flex flex-col relative z-10 min-h-[969px] w-full items-center pb-16 max-md:max-w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/ca7ec7c7d94147318bebe8b1c8ccdcac/527904a5d335bf09f81053ec71f0ae92bb05e4ba?placeholderIfAbsent=true"
            alt="Background"
            className="absolute h-full w-full object-cover inset-0"
          />
          <HomeNavbar />
          <Hero />
        </div>
        <Features />
        <About />
        <Blog />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
}
