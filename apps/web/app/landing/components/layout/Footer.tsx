import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[rgba(0,20,35,1)] flex w-full items-stretch gap-[27px] overflow-hidden flex-wrap mt-24 px-[70px] rounded-[30px] max-md:max-w-full max-md:mt-10 max-md:px-5">
      <div className="flex flex-col relative min-h-[719px] tracking-[-0.69px] grow shrink-0 basis-0 w-fit py-[95px] max-md:max-w-full max-md:pt-[100px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/ca7ec7c7d94147318bebe8b1c8ccdcac/13c02a8b9c351864968d59e98410297f01b9e5b1?placeholderIfAbsent=true"
          alt="Footer Background"
          className="absolute h-full w-full object-cover inset-0"
        />
        <div className="relative flex w-full items-stretch gap-5 flex-wrap justify-between max-md:max-w-full">
          <div className="flex flex-col w-[493px] max-w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/ca7ec7c7d94147318bebe8b1c8ccdcac/19bd1227cd2ac8f957b2ee976ede9b3ad553aece?placeholderIfAbsent=true"
              alt="Logo"
              className="aspect-[4.1] object-contain w-[353px] max-w-full"
            />
            <p className="self-stretch w-full text-[22px] text-white font-medium leading-[33px] mt-[38px]">
              Your one-stop shop for the finance <br />
              you need to know.
            </p>
            <button className="self-stretch bg-cyan-400 w-[152px] max-w-full gap-3.5 text-xl text-[rgba(28,29,34,1)] font-semibold leading-none mt-[38px] px-[22px] py-3.5 rounded-[81px] max-md:px-5">
              Contact US
            </button>
          </div>

          <div className="flex gap-[33px] text-[rgba(210,211,218,1)] font-medium flex-wrap">
            {/* Products Column */}
            <div className="min-w-[220px] min-h-[308px] whitespace-nowrap w-[227px] pb-44 max-md:pb-[100px]">
              <h3 className="text-[rgba(120,124,145,1)] text-base leading-none uppercase">
                Products
              </h3>
              <nav className="mt-[27px] space-y-[27px]">
                <Link href="#" className="block text-[19px] leading-none">
                  For Entrepreneurs
                </Link>
                <Link href="#" className="block text-[22px] leading-none">
                  Partners
                </Link>
              </nav>
            </div>

            {/* Company Column */}
            <div className="min-w-[220px] min-h-[362px] text-[19px] leading-none w-[231px] pb-[66px]">
              <h3 className="text-[rgba(120,124,145,1)] text-base leading-none uppercase">
                Company
              </h3>
              <nav className="mt-[27px] space-y-[27px]">
                <Link href="#" className="block">
                  About Us
                </Link>
                <Link href="#" className="block">
                  Careers
                </Link>
                <Link href="#" className="block">
                  Changelog
                </Link>
              </nav>
            </div>

            {/* Learn More Column */}
            <div className="min-w-[220px] min-h-[308px] w-[222px] pb-44 max-md:pb-[100px]">
              <h3 className="text-[rgba(120,124,145,1)] text-base leading-none uppercase">
                Learn More
              </h3>
              <nav className="mt-[27px] space-y-[27px]">
                <Link href="#" className="block text-[19px] leading-none">
                  Blog
                </Link>
                <Link href="#" className="block text-[22px] leading-none">
                  FAQs
                </Link>
              </nav>
            </div>
          </div>
        </div>

        <div className="relative border mr-[-110px] shrink-0 h-px mt-[166px] border-[rgba(46,48,56,1)] border-solid max-md:max-w-full max-md:mt-10" />
      </div>

      <div className="flex items-stretch gap-4 mt-[664px] max-md:mt-10">
        <Link href="#" className="w-[33px]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/ca7ec7c7d94147318bebe8b1c8ccdcac/403297eb060ac7c87472e997b1fc919a9b56e735?placeholderIfAbsent=true"
            alt="X"
            className="aspect-[1] object-contain w-[33px]"
          />
        </Link>
        <Link href="#" className="w-[33px]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/ca7ec7c7d94147318bebe8b1c8ccdcac/51cbd4224e98b670383d94dc0ca92da399bb6649?placeholderIfAbsent=true"
            alt="LinkedIn"
            className="aspect-[1] object-contain w-[33px]"
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
