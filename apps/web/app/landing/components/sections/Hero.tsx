import React from "react";

const Hero = () => {
  return (
    <div className="absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-auto z-10">
      <div className="inline-block bg-white/30 backdrop-blur-lg px-6.5 py-3 mb-4 rounded-full">
        <h3 className="text-white text-md font-light whitespace-nowrap">
          Stay in touch with us on social media
        </h3>
      </div>

      <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-22">
        <div className="whitespace-nowrap">The most reliable way to</div>
        <div className="whitespace-nowrap">Smart Finance!</div>
      </h1>

      <p className="text-white text-xl leading-7 mt-5">
        Experience seamless financial control with Valura built for security,{" "}
        <br /> simplicity, and your peace of mind.
      </p>

      <div className="flex gap-4 justify-center mt-10">
        <div className="flex items-center gap-1 bg-white rounded-full px-6 py-3">
          <button className="text-[#265073d9] text-md font-medium">
            Download Now
          </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#b6dfcb] rotate-[-45deg]"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </div>
        <div className="flex items-center border-1 gap-1 bg-white/20 border-white/70 rounded-full px-6 py-3">
          <button className="text-white text-md font-medium">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
