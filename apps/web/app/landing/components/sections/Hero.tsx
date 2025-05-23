import React from 'react';

const Hero = () => {
  return (
    <section className="flex flex-col relative z-10 min-h-screen w-full items-center justify-center pt-20 pb-12 px-4 max-md:pt-16 max-md:pb-8 overflow-hidden">
      {/* Background Image */}
      {/* <div
        className="absolute inset-0 z-0 bg-no-repeat bg-bottom bg-cover"
        style={{
          backgroundImage:
            "url('https://cdn.builder.io/api/v1/image/assets/ca7ec7c7d94147318bebe8b1c8ccdcac/527904a5d335bf09f81053ec71f0ae92bb05e4ba?placeholderIfAbsent=true')",
        }}
      ></div> */}

      {/* Navigation Tabs */}
      <div className="relative mt-4 z-10 flex w-[380px] max-w-full items-stretch gap-3 text-sm whitespace-nowrap text-center leading-none justify-between mb-8 max-md:w-[320px] max-md:gap-2">
        {[
          { label: 'Reliable', icon: '↗' },
          { label: 'Adaptable', icon: '↔' },
          { label: 'Swift', icon: '→' },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-[rgba(0,0,0,0.25)] backdrop-blur-sm border flex gap-2 pt-2 pb-2 px-4 rounded-full border-[rgba(34,197,94,0.3)] border-solid"
          >
            <span className="text-green-400 font-semibold text-base">{item.icon}</span>
            <span className="font-medium text-sm bg-gradient-to-r from-[#86EFAC] to-[#FEF08A] bg-clip-text text-transparent">
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* Headings */}
      <h1 className="relative z-10 text-white text-5xl lg:text-6xl font-light leading-tight text-center max-w-4xl max-md:text-4xl font-[Junicode] lowercase">
        the most 
      </h1>

      <h2 className="relative z-10 text-white text-5xl lg:text-6xl font-light leading-tight text-center mt-2 max-md:text-4xl font-[Junicode] lowercase">
        reliable way to
      </h2>
      <h3 className="relative z-10 text-white text-5xl lg:text-6xl font-light leading-tight text-center mt-2 max-md:text-4xl font-[Junicode] italic lowercase">
        smart finance
      </h3>

      {/* Action Buttons */}
      <div className="relative z-10 flex items-center gap-4 mt-10 max-md:flex-col max-md:w-full max-md:px-4">
        <button className="bg-cyan-400 text-black font-semibold px-8 py-3 rounded-full hover:bg-cyan-300 transition-colors max-md:w-full">
          Get In Touch
        </button>
        <button className="border flex items-center justify-center gap-2 text-white font-medium px-8 py-3 rounded-full border-[rgba(255,255,255,0.3)] hover:bg-[rgba(255,255,255,0.1)] transition-colors max-md:w-full">
          <span>Watch Demo Video</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/ca7ec7c7d94147318bebe8b1c8ccdcac/eabfe36b44d79c4265fcd96d9db29faf87aa0786?placeholderIfAbsent=true"
            alt="Play"
            className="w-4 h-4"
          />
        </button>
      </div>

      {/* Description */}
      <p className="relative z-10 text-white text-lg font-normal leading-relaxed text-center mt-8 max-w-xl max-md:text-base">
        Experience seamless financial control with Fundora
        <br />
        built for security, simplicity, and your peace of mind.
      </p>

      {/* Stats */}
      <div className="relative z-10 flex w-full max-w-md justify-between items-center gap-8 mt-12 max-md:gap-6">
        <div className="flex items-center gap-3">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/ca7ec7c7d94147318bebe8b1c8ccdcac/db418b903402beb1d67bedc1ea81e5d2d6c18f77?placeholderIfAbsent=true"
            alt="Assets"
            className="w-10 h-10 rounded-lg"
          />
          <div className="text-left">
            <div className="text-green-300 text-2xl font-bold">$5.1M</div>
            <div className="text-white text-sm">Assets Secured</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/ca7ec7c7d94147318bebe8b1c8ccdcac/0e9508cd0a4414c96828b3bc4dbd72ce499f55f2?placeholderIfAbsent=true"
            alt="Users"
            className="w-10 h-10 rounded-lg"
          />
          <div className="text-left">
            <div className="text-green-300 text-2xl font-bold">135K+</div>
            <div className="text-white text-sm">New Users</div>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="relative z-10 mt-12 pt-6 border-t border-[rgba(255,255,255,0.1)] max-w-md w-full text-center">
        <p className="text-white text-sm mb-4">Stay in touch with us<br />on social networks</p>
        <div className="flex justify-center gap-4">
          {[
            'd329b750449234e082958d77c1bda9e5b68d6fa7',
            '549ad1f4af9d9807aeaf631efad97ec35e5d5a0a',
            '93bc28038b083ac28cd687e6cce79a104174817c',
          ].map((id) => (
            <img
              key={id}
              src={`https://cdn.builder.io/api/v1/image/assets/ca7ec7c7d94147318bebe8b1c8ccdcac/${id}?placeholderIfAbsent=true`}
              alt="Social"
              className="w-8 h-8 rounded-full hover:opacity-80 transition-opacity cursor-pointer"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
