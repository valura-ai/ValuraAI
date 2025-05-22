import React from "react";



const About = () => {
  return (
    <section className="bg-[rgba(0,20,35,1)] flex flex-col overflow-hidden items-center justify-center px-20 py-[136px] max-md:max-w-full max-md:px-5 max-md:py-[100px]">
      <div className="flex mb-[-30px] w-[1265px] max-w-full flex-col max-md:mb-2.5">
        <h2 className="text-white text-lg font-medium leading-none tracking-[-0.25px]">
          About US
        </h2>
        <div className="bg-cyan-400 flex w-[121px] shrink-0 h-1" />
        <h3 className="text-white text-[58px] font-[350] leading-[70px] tracking-[-2px] w-[760px] mt-[26px] max-md:max-w-full max-md:text-[40px] max-md:leading-[54px]">
          We are the best UAE financial distribution provider
        </h3>
        <p className="text-white text-xl font-normal leading-[1.4] tracking-[-0.5px] mt-6 max-md:max-w-full">
          Fast, flexible and secure international money transfers across the
          world.
        </p>
        <a
          href="api/auth/login"
          className="bg-cyan-400 flex items-stretch gap-[7px] text-lg text-black font-semibold tracking-[-0.25px] leading-loose mt-10 px-8 py-4 rounded-[64px] max-md:px-5"
        >
          <span>Create account</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/ca7ec7c7d94147318bebe8b1c8ccdcac/cd13e47e06552876935501c0b22e84322bb2669c?placeholderIfAbsent=true"
            alt="Arrow"
            className="aspect-[1] object-contain w-[22px] shrink-0 my-auto"
          />
        </a>

        {/* Features Grid */}
        <div className="grid grid-cols-4 gap-5 mt-24 max-md:grid-cols-1 max-md:mt-10">
          <div className="flex flex-col text-white">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/ca7ec7c7d94147318bebe8b1c8ccdcac/c8b56083b8cf916619fa7d4e738fe876bcbaad4d?placeholderIfAbsent=true"
              alt="Fast transfers"
              className="aspect-[1] object-contain w-20"
            />
            <h4 className="text-2xl font-medium leading-none tracking-[-1px] mt-6">
              Fast, reliable transfers
            </h4>
            <p className="text-lg font-normal leading-7 tracking-[-0.25px] mt-[15px]">
              Get same-day transfers on most major currencies.
            </p>
          </div>
          <div className="flex flex-col text-white">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/ca7ec7c7d94147318bebe8b1c8ccdcac/663e9ede58dc4db6db74bd052b9f34f2bd81a141?placeholderIfAbsent=true"
              alt="Global coverage"
              className="aspect-[1] object-contain w-20"
            />
            <h4 className="text-2xl font-medium leading-none tracking-[-1px] mt-6">
              Global coverage
            </h4>
            <p className="text-lg font-normal leading-7 tracking-[-0.25px] mt-[15px]">
              Collect and pay like a local, hold up to 35 currencies.
            </p>
          </div>
          <div className="flex flex-col text-white">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/ca7ec7c7d94147318bebe8b1c8ccdcac/bd3c5634f5bccc400f5456ceae90f2c9f6587228?placeholderIfAbsent=true"
              alt="Bank rates"
              className="aspect-[1] object-contain w-20"
            />
            <h4 className="text-2xl font-medium leading-none tracking-[-1px] mt-6">
              Bank-beating rates
            </h4>
            <p className="text-lg font-normal leading-7 tracking-[-0.25px] mt-[15px]">
              Paymint exchange rate are cheaper than bank.
            </p>
          </div>
          <div className="flex flex-col text-white">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/ca7ec7c7d94147318bebe8b1c8ccdcac/a2e1c81f86ccaf63661eb395e02a1e2fef61c3ac?placeholderIfAbsent=true"
              alt="Security"
              className="aspect-[1] object-contain w-20"
            />
            <h4 className="text-2xl font-medium leading-none tracking-[-1px] mt-6">
              Secure & Trusted
            </h4>
            <p className="text-lg font-normal leading-7 tracking-[-0.25px] mt-[15px]">
              Our security is based on the highest international standards.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5 mt-24 max-md:grid-cols-1">
          <div className="bg-[rgba(255,255,255,0.1)] shadow-[0px_8px_10px_-6px_rgba(0,0,0,0.1)] border flex grow flex-col overflow-hidden items-stretch text-xl text-white font-medium leading-[1.2] justify-center w-full px-0.5 py-px rounded-2xl border-[rgba(255,255,255,0.2)] border-solid">
            <div className="pb-[13px]">
              <div className="border flex flex-col items-stretch pt-10 px-[38px] rounded-[10px] border-[rgba(19,62,62,1)] border-solid">
                <h4>Precision-Driven Portfolio Growth</h4>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/ca7ec7c7d94147318bebe8b1c8ccdcac/ec10c2647f134ea9c99910811ef33a3954603025?placeholderIfAbsent=true"
                  alt="Portfolio Growth"
                  className="aspect-[2.35] object-contain w-full mt-1"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch text-white">
            <div className="bg-[rgba(255,255,255,0.1)] shadow-[0px_8px_10px_-6px_rgba(0,0,0,0.1)] border flex flex-col overflow-hidden items-stretch justify-center p-px rounded-2xl border-[rgba(255,255,255,0.2)] border-solid">
              <div className="pb-[33px]">
                <div className="border z-10 flex flex-col pl-[33px] pr-20 pt-9 pb-[124px] rounded-[10px] border-[rgba(19,62,62,1)] border-solid">
                  <h4 className="text-xl font-medium leading-[1.2]">
                    Diversified Assets
                  </h4>
                  <p className="text-base font-normal leading-[21px] mb-[-25px] mt-[5px]">
                    Tailor your portfolio to achieve optimal performance.
                  </p>
                </div>
              </div>
            </div>
            <div className="text-xl font-medium leading-[1.2] ml-[22px] mr-[27px] mt-[39px]">
              Your Portfolio, Optimized in Real-Time
            </div>
            <p className="text-base font-normal leading-[21px] self-center w-[322px] mt-7">
              Adjusted instantly with market changes to enhance investment
              efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
