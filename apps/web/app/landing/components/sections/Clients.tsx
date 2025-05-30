import React from "react";
import Image from "next/image";

const Clients = () => {
  return (
    <div className="absolute top-[140vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-auto z-10">
      <div className="">
        <h1 className="text-black text-5xl font-light font-sans">
          Our Clients
        </h1>
        <h3 className="text-black mt-7 text-xl font-light font-sans">
          We have been working with 500+ clients
        </h3>
        <Image
          src="/Group.png"
          alt="Group"
          height={1000}
          width={1000}
          priority
          className="w-auto h-auto mt-6"
        />
      </div>
    </div>
  );
};

export default Clients;
