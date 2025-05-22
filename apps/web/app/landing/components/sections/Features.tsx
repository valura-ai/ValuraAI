import React from "react";

const Features = () => {
  return (
    <section className="bg-[rgba(219,246,255,1)] flex mt-[-155px] flex-col overflow-hidden items-center text-base text-[rgba(69,71,69,1)] font-normal tracking-[-0.25px] pt-[219px] pb-5 px-[70px] rounded-[32px_32px_0px_0px] max-md:max-w-full max-md:pt-[100px] max-md:px-5">
      <div className="flex w-[1259px] max-w-full items-stretch gap-[40px_100px] flex-wrap ml-[11px]">
        <div className="grow my-auto">Trusted By:</div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/ca7ec7c7d94147318bebe8b1c8ccdcac/1dca5dd2a495c64ec07fe73240ea2d023555e8e5?placeholderIfAbsent=true"
          alt="Partners"
          className="aspect-[13.33] object-contain w-[1062px] max-md:max-w-full"
        />
      </div>
      <h2 className="text-[rgba(0,44,21,1)] text-[58px] font-[350] leading-[70px] tracking-[-2px] text-center self-center w-[800px] mt-[81px] max-md:text-[40px] max-md:leading-[54px] max-md:mt-10">
        Where are <br />
        We Heading :
      </h2>
      <div className="self-center w-full max-w-[1341px] mt-11 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          {/* Feature Cards */}
          <div className="w-[33%] max-md:w-full max-md:ml-0">
            <div className="bg-[rgba(0,10,20,1)] grow overflow-hidden text-white w-full rounded-[25px] max-md:max-w-full max-md:mt-[29px]">
              <div className="flex flex-col relative min-h-[456px] w-full pl-[25px] pr-20 pt-[332px] pb-[35px] rounded-[25px] max-md:max-w-full max-md:pt-[100px] max-md:px-5">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/ca7ec7c7d94147318bebe8b1c8ccdcac/5bffbae673c07cc12fce67d467a86b9947002a2c?placeholderIfAbsent=true"
                  alt="Feature"
                  className="absolute h-full w-full object-cover inset-0"
                />
                <h3 className="relative text-[32px] font-[350] leading-[0.9]">
                  Grow Your Base
                </h3>
                <p className="relative text-xl font-normal leading-none mt-2.5">
                  Choose only smart tools to track and boost your customers
                  growth.
                </p>
              </div>
            </div>
          </div>
          <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div className="bg-[rgba(0,10,20,1)] grow overflow-hidden text-white w-full rounded-[25px] max-md:max-w-full max-md:mt-[29px]">
              <div className="flex flex-col items-stretch pb-[33px] rounded-[25px] border-[rgba(255,255,255,0.1)] border-solid border-2 max-md:max-w-full">
                <div className="flex flex-col relative min-h-[374px] w-full text-[32px] font-[350] leading-[0.9] pt-[332px] pb-[13px] px-[25px] max-md:max-w-full max-md:pt-[100px] max-md:px-5">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/ca7ec7c7d94147318bebe8b1c8ccdcac/9c6c5e55cf118b8df5fbd03fbcf96e52d70929af?placeholderIfAbsent=true"
                    alt="Feature"
                    className="absolute h-full w-full object-cover inset-0"
                  />
                  <h3 className="relative min-h-[29px] w-[251px] max-w-full">
                    Launching in UAE
                  </h3>
                </div>
                <p className="self-center z-10 h-[50px] w-[363px] max-w-full text-xl font-normal leading-none">
                  Get into the global markets. We build business without borders
                </p>
              </div>
            </div>
          </div>
          <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div className="bg-[rgba(0,10,20,1)] grow overflow-hidden text-white w-full rounded-[33px] max-md:max-w-full max-md:mt-[29px]">
              <div className="flex flex-col relative min-h-[456px] w-full pt-[98px] pb-[33px] px-[25px] rounded-[33px] max-md:max-w-full max-md:px-5">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/ca7ec7c7d94147318bebe8b1c8ccdcac/678ae6bd98c9a0d063cbe15c7c811f7c99d15c1a?placeholderIfAbsent=true"
                  alt="Feature"
                  className="absolute h-full w-full object-cover inset-0"
                />
                <div className="relative text-[19px] font-semibold leading-[1.2] ml-[33px] mr-[34px] rounded-[18px] max-md:mx-2.5">
                  <div className="border flex items-stretch gap-4 px-[62px] py-[21px] rounded-[18px] border-[rgba(255,255,255,0.08)] border-solid max-md:px-5">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/ca7ec7c7d94147318bebe8b1c8ccdcac/20be24371a9ff98795f018196f7c43a7843915d4?placeholderIfAbsent=true"
                      alt="AI"
                      className="aspect-[1] object-contain w-[33px] shrink-0"
                    />
                    <span className="grow shrink w-28 my-auto">
                      AI Analysis
                    </span>
                  </div>
                </div>
                <h3 className="relative min-h-[69px] text-[32px] font-[350] leading-none mt-[123px] max-md:mt-10">
                  AI Portfolio Analysis
                </h3>
                <p className="relative min-h-[46px] text-xl font-normal leading-[23px] mt-[13px]">
                  You&apos;ll definitely like this template, so why not purchase
                  it right now?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
