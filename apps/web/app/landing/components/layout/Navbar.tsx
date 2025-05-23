import React from 'react';
import { format } from 'date-fns';

const Navbar = () => {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime(now);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Function to calculate Dubai/UAE time (GMT+4)
  const getDubaiTime = () => {
    const now = new Date();
    const utcTime = now.getTime() + now.getTimezoneOffset() * 60000;
    return new Date(utcTime + (4 * 60 * 60000));
  };

  // Function to calculate India time (GMT+5:30)
  const getIndiaTime = () => {
    const now = new Date();
    const utcTime = now.getTime() + now.getTimezoneOffset() * 60000;
    return new Date(utcTime + (5 * 60 * 60000) + (30 * 60000));
  };

  // Get formatted times
  const dubaiTime = getDubaiTime();
  const indiaTime = getIndiaTime();

  return (
    <nav className="relative bg-transparent self-stretch flex w-full flex-col items-center justify-center px-5 sm:px-8 md:px-12 lg:px-[70px] py-4">
      <div className="flex w-full max-w-[1537px] items-center justify-between">
        {/* Left section - Logo and Navigation */}
        <div className="flex items-center gap-6 md:gap-8 text-base text-white font-normal">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/ca7ec7c7d94147318bebe8b1c8ccdcac/fcab38a6c37920ff856346db733dd47b127041d4?placeholderIfAbsent=true"
            alt="Valura AI Logo"
            className="aspect-[4.13] object-contain w-[120px] shrink-0"
          />
          
          {/* Navigation Menu - Always visible */}
          <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
            <div className="flex items-center gap-1 cursor-pointer hover:text-cyan-400 transition-colors">
              <span>Products</span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/ca7ec7c7d94147318bebe8b1c8ccdcac/4f1cbcd5557447a9654866e14959d526ea68d007?placeholderIfAbsent=true"
                alt="Dropdown"
                className="aspect-[1] object-contain w-4 shrink-0"
              />
            </div>
            <button className="hover:text-cyan-400 transition-colors">Plan and Pricing</button>
            <button className="hover:text-cyan-400 transition-colors">Blog</button>
            <button className="hover:text-cyan-400 transition-colors">Support</button>
          </div>
        </div>

        {/* Right section - Time Display and Sign Up */}
        <div className="flex items-center gap-4">
          {/* Time Display - Always visible on sm+ */}
          <div className="flex items-center gap-2 sm:gap-4 bg-[rgba(255,255,255,0.05)] px-2 sm:px-4 py-2 rounded-full text-xs sm:text-sm text-white">
            <div className="flex items-center gap-1 sm:gap-2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/ca7ec7c7d94147318bebe8b1c8ccdcac/06f813e24c48de57f86ce48e229e0ac28367be3a?placeholderIfAbsent=true"
                alt="Clock"
                className="aspect-[1] object-contain w-4 shrink-0"
              />
              <span className="whitespace-nowrap">{format(dubaiTime, 'HH:mm')} PM (Dubai/UAE)</span>
            </div>
            <div className="bg-[rgba(255,255,255,0.2)] w-px h-4" />
            <div className="flex items-center gap-1 sm:gap-2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/ca7ec7c7d94147318bebe8b1c8ccdcac/6fb81ccbb790eaf747c52e08504db141bd3177a1?placeholderIfAbsent=true"
                alt="Clock"
                className="aspect-[1] object-contain w-4 shrink-0"
              />
              <span className="whitespace-nowrap">{format(indiaTime, 'HH:mm')} PM (Asia/Calcutta)</span>
            </div>
          </div>
          
          {/* Sign Up Button */}
          <button className="bg-cyan-400 hover:bg-cyan-500 transition-colors text-black font-semibold px-6 py-3 rounded-full text-sm">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;