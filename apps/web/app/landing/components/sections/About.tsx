import React from 'react';

const About = () => {
  return (
    <section className="bg-[#001423] flex flex-col overflow-hidden items-center justify-center px-20 py-[136px] max-md:max-w-full max-md:px-5 max-md:py-[100px]">
      <div className="flex mb-[-30px] w-[1265px] max-w-full flex-col max-md:mb-2.5">
        <h2 className="text-cyan-400 text-lg font-medium leading-none tracking-[-0.25px]">
          About US
        </h2>
        <div className="bg-cyan-400 flex w-[121px] shrink-0 h-1" />
        <h3 className="text-white text-[48px] font-[350] leading-[56px] tracking-[-1.5px] w-[760px] mt-[26px] max-md:max-w-full max-md:text-[40px] max-md:leading-[54px]">
          We are the best UAE financial distribution provider
        </h3>
        <p className="text-white text-xl font-normal leading-[1.4] tracking-[-0.5px] mt-4 max-md:max-w-full">
          Fast, flexible and secure international money transfers across the world.
        </p>
        <a
          href="api/auth/login"
          className="bg-cyan-400 flex items-center justify-center w-full max-w-[770px] text-black font-medium mt-10 py-3 rounded-full no-underline"
        >
          <span>Create account</span>
          <span className="ml-1">→</span>
        </a>

        {/* Features Grid */}
        <div className="grid grid-cols-4 gap-10 mt-20 max-md:grid-cols-1 max-md:mt-10 max-md:gap-8">
          <div className="flex flex-col text-white">
            <div className="bg-cyan-400 rounded-full w-12 h-12 flex items-center justify-center">
              <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="text-base font-medium mt-4">
              Fast, reliable transfers
            </h4>
            <p className="text-sm font-normal leading-5 text-white/80 mt-2">
              Get same-day transfers on most major currencies.
            </p>
          </div>
          <div className="flex flex-col text-white">
            <div className="bg-cyan-400 rounded-full w-12 h-12 flex items-center justify-center">
              <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="text-base font-medium mt-4">
              Global coverage
            </h4>
            <p className="text-sm font-normal leading-5 text-white/80 mt-2">
              Collect and pay like a local, hold up to 35 currencies.
            </p>
          </div>
          <div className="flex flex-col text-white">
            <div className="bg-cyan-400 rounded-full w-12 h-12 flex items-center justify-center">
              <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="text-base font-medium mt-4">
              Bank-beating rates
            </h4>
            <p className="text-sm font-normal leading-5 text-white/80 mt-2">
              Paymint exchange rate are cheaper than bank.
            </p>
          </div>
          <div className="flex flex-col text-white">
            <div className="bg-cyan-400 rounded-full w-12 h-12 flex items-center justify-center">
              <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h4 className="text-base font-medium mt-4">
              Secure & Trusted
            </h4>
            <p className="text-sm font-normal leading-5 text-white/80 mt-2">
              Our security is based on the highest international standards.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-16 max-md:grid-cols-1 max-md:gap-8">
          {/* Precision-Driven Portfolio Growth Card */}
          <div className="bg-[rgba(0,0,0,0.3)] border border-[rgba(255,255,255,0.1)] rounded-xl overflow-hidden p-6">
            <h4 className="text-white text-base font-medium">Precision-Driven Portfolio Growth</h4>
            <p className="text-white/70 text-xs mt-1">Every move guided by data and insights for smarter portfolio growth.</p>
            <div className="mt-4 relative">
              {/* SVG Chart */}
              <svg viewBox="0 0 500 200" className="w-full">
                <path 
                  d="M0,180 L50,160 L100,170 L150,140 L200,150 L250,120 L300,100 L350,80 L400,60 L450,40 L500,20" 
                  fill="none" 
                  stroke="#4AE3C2" 
                  strokeWidth="3"
                />
                {/* Highlight dot */}
                <circle cx="350" cy="80" r="8" fill="#4AE3C2" opacity="0.5" />
                <circle cx="350" cy="80" r="4" fill="#fff" />
                {/* Vertical line from dot */}
                <line x1="350" y1="80" x2="350" y2="180" stroke="#4AE3C2" strokeWidth="1" opacity="0.5" strokeDasharray="4" />
              </svg>
            </div>
          </div>
          
          {/* Diversified Assets Card and Text */}
          <div className="flex flex-col gap-6">
            <div className="bg-[rgba(0,0,0,0.3)] border border-[rgba(255,255,255,0.1)] rounded-xl overflow-hidden p-6">
              <h4 className="text-white text-base font-medium">Diversified Assets</h4>
              <p className="text-white/70 text-xs mt-1">
                Tailor your portfolio to achieve optimal performance.
              </p>
            </div>
            
            <div className="text-white">
              <h4 className="text-base font-medium">Your Portfolio, Optimized in Real-Time</h4>
              <p className="text-white/70 text-xs mt-2">
                Adjusted instantly with market changes to enhance investment efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;