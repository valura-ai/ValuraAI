import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col items-center w-full h-full">
      <div className="relative flex w-[355px] max-w-full items-stretch gap-5 text-sm whitespace-nowrap text-center leading-none justify-between mt-16 max-md:mt-10">
        <div className="bg-[rgba(0,0,0,0.2)] border flex gap-[11px] pt-2.5 pb-[19px] px-3.5 rounded-full border-[rgba(34,197,94,0.2)] border-solid">
          <span className="text-green-300 font-normal">↗</span>
          <span className="font-medium">Reliable</span>
        </div>
        <div className="bg-[rgba(0,0,0,0.2)] border flex gap-[9px] pt-2.5 pb-[17px] px-3.5 rounded-full border-[rgba(34,197,94,0.2)] border-solid">
          <span className="text-green-300 font-semibold">↔</span>
          <span className="font-medium">Adaptable</span>
        </div>
        <div className="bg-[rgba(0,0,0,0.2)] border flex gap-2.5 pt-2.5 pb-[19px] px-[15px] rounded-full border-[rgba(34,197,94,0.2)] border-solid">
          <span className="text-green-300 font-semibold">→</span>
          <span className="font-medium">Swift</span>
        </div>
      </div>
      <h1 className="relative text-white text-7xl font-[350] leading-[72px] text-center mt-[15px] max-md:max-w-full max-md:text-[40px] max-md:leading-[44px]">
        The Most
        <br />
        Reliable Way to
      </h1>
      <h2 className="relative text-white text-7xl font-[350] leading-none text-center mt-[22px] max-md:max-w-full max-md:text-[40px]">
        [ Smart Finance ]
      </h2>
      <div className="relative flex w-[415px] max-w-full items-stretch gap-4 text-base text-center mt-[52px] max-md:mt-10">
        <button className="bg-cyan-400 text-black font-bold px-[33px] py-[19px] rounded-full max-md:px-5">
          Get In Touch
        </button>
        <button className="border flex items-stretch gap-2 text-white font-semibold px-[33px] py-[15px] rounded-full border-[rgba(255,255,255,0.3)] border-solid max-md:px-5">
          <span>Watch Demo Video</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/ca7ec7c7d94147318bebe8b1c8ccdcac/eabfe36b44d79c4265fcd96d9db29faf87aa0786?placeholderIfAbsent=true"
            alt="Play"
            className="aspect-[1] object-contain w-4 shrink-0 mt-1"
          />
        </button>
      </div>
      <p className="relative text-white text-lg font-normal leading-7 text-center mt-[43px] max-md:max-w-full max-md:mt-10">
        Experience seamless financial control with Fundora
        <br />
        built for security, simplicity, and your peace of mind.
      </p>
      <div className="relative flex w-[343px] max-w-full items-stretch gap-5 justify-between mt-14 max-md:mt-10">
        <div className="flex gap-3">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/ca7ec7c7d94147318bebe8b1c8ccdcac/db418b903402beb1d67bedc1ea81e5d2d6c18f77?placeholderIfAbsent=true"
            alt="Assets"
            className="aspect-[1] object-contain w-10 shrink-0 mt-[11px] rounded-md"
          />
          <div className="flex flex-col items-stretch">
            <div className="text-green-300 text-2xl font-bold leading-none">
              $5.1M
            </div>
            <div className="text-white text-sm font-normal leading-none mt-2.5">
              Assets Secured
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/ca7ec7c7d94147318bebe8b1c8ccdcac/0e9508cd0a4414c96828b3bc4dbd72ce499f55f2?placeholderIfAbsent=true"
            alt="Users"
            className="aspect-[1] object-contain w-10 shrink-0 mt-[11px] rounded-md"
          />
          <div>
            <div className="text-green-300 text-2xl font-bold leading-none">
              135K+
            </div>
            <div className="text-white text-sm font-normal leading-none mt-3.5 max-md:mr-[3px]">
              New users
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex w-[448px] max-w-full flex-col items-center mt-[65px] pt-[34px] px-20 border-[rgba(255,255,255,0.1)] border-t max-md:mt-10 max-md:px-5">
        <div className="w-[156px] max-w-full">
          <div className="text-white text-sm font-normal leading-5 text-center">
            Stay in touch with us
            <br />
            on social networks
          </div>
          <div className="flex items-stretch gap-5 justify-between mt-6">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/ca7ec7c7d94147318bebe8b1c8ccdcac/d329b750449234e082958d77c1bda9e5b68d6fa7?placeholderIfAbsent=true"
              alt="Social"
              className="aspect-[1] object-contain w-9 shrink-0 rounded-[18px]"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/ca7ec7c7d94147318bebe8b1c8ccdcac/549ad1f4af9d9807aeaf631efad97ec35e5d5a0a?placeholderIfAbsent=true"
              alt="Social"
              className="aspect-[1] object-contain w-9 shrink-0 rounded-[18px]"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/ca7ec7c7d94147318bebe8b1c8ccdcac/93bc28038b083ac28cd687e6cce79a104174817c?placeholderIfAbsent=true"
              alt="Social"
              className="aspect-[1] object-contain w-9 shrink-0 rounded-[18px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
