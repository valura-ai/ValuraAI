import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full bg-white py-10">
      <footer className="bg-[rgba(0,20,35,1)] mx-4 md:mx-8 rounded-[30px] px-6 md:px-12 py-10">
        <div className="relative w-full overflow-hidden">
          {/* Background image */}
          <img
            src="https://cdn.builder.io/api/v1/image/assets/ca7ec7c7d94147318bebe8b1c8ccdcac/13c02a8b9c351864968d59e98410297f01b9e5b1?placeholderIfAbsent=true"
            alt="Footer Background"
            className="absolute h-full w-full object-cover inset-0"
          />
          <div className="relative z-10 flex w-full items-stretch gap-5 flex-wrap justify-between">
            {/* Left column */}
            <div className="flex flex-col w-[493px] max-w-full">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/ca7ec7c7d94147318bebe8b1c8ccdcac/19bd1227cd2ac8f957b2ee976ede9b3ad553aece?placeholderIfAbsent=true"
                alt="Logo"
                className="aspect-[4.1] object-contain w-[353px] max-w-full"
              />
              <p className="text-[22px] text-white font-medium leading-[33px] mt-6">
                Your one-stop shop for the finance <br />
                you need to know.
              </p>
              <button className="bg-cyan-400 w-[152px] text-xl text-[rgba(28,29,34,1)] font-semibold leading-none mt-6 px-6 py-3 rounded-[81px]">
                Contact US
              </button>
            </div>

            {/* Right columns */}
            <div className="flex gap-8 text-[rgba(210,211,218,1)] font-medium flex-wrap">
              {/* Products */}
              <div className="min-w-[220px] w-[227px] pb-6 max-md:pb-4">
                <h3 className="text-[rgba(120,124,145,1)] text-base uppercase">
                  Products
                </h3>
                <nav className="mt-5 space-y-5">
                  <Link href="#" className="block text-[19px]">
                    For Entrepreneurs
                  </Link>
                  <Link href="#" className="block text-[22px]">
                    Partners
                  </Link>
                </nav>
              </div>

              {/* Company */}
              <div className="min-w-[220px] w-[231px] pb-6 max-md:pb-4">
                <h3 className="text-[rgba(120,124,145,1)] text-base uppercase">
                  Company
                </h3>
                <nav className="mt-5 space-y-5 text-[19px]">
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

              {/* Learn More */}
              <div className="min-w-[220px] w-[222px] pb-6 max-md:pb-4">
                <h3 className="text-[rgba(120,124,145,1)] text-base uppercase">
                  Learn More
                </h3>
                <nav className="mt-5 space-y-5">
                  <Link href="#" className="block text-[19px]">
                    Blog
                  </Link>
                  <Link href="#" className="block text-[22px]">
                    FAQs
                  </Link>
                </nav>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="relative border border-[rgba(46,48,56,1)] mt-8 h-px w-full" />

          {/* Social Icons */}
          <div className="relative flex items-center gap-4 mt-6">
            <Link href="#" className="w-[33px]">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/ca7ec7c7d94147318bebe8b1c8ccdcac/403297eb060ac7c87472e997b1fc919a9b56e735?placeholderIfAbsent=true"
                alt="X"
                className="aspect-square w-[33px] object-contain"
              />
            </Link>
            <Link href="#" className="w-[33px]">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/ca7ec7c7d94147318bebe8b1c8ccdcac/51cbd4224e98b670383d94dc0ca92da399bb6649?placeholderIfAbsent=true"
                alt="LinkedIn"
                className="aspect-square w-[33px] object-contain"
              />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
