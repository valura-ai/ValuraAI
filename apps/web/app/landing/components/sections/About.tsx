"use client";

import React, { useState, useEffect } from "react";

const About = () => {
  const [isClient, setIsClient] = useState(false);

  // Ensure we're on the client before rendering the chart
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Data points extracted from the original SVG path
  const chartData = [
    { x: 0, value: 20 }, // Inverted: 180 -> 20
    { x: 1, value: 40 }, // Inverted: 160 -> 40
    { x: 2, value: 30 }, // Inverted: 170 -> 30
    { x: 3, value: 60 }, // Inverted: 140 -> 60
    { x: 4, value: 50 }, // Inverted: 150 -> 50
    { x: 5, value: 80 }, // Inverted: 120 -> 80
    { x: 6, value: 100 }, // Inverted: 100 -> 100
    { x: 7, value: 130 }, // Inverted: 80 -> 120 (highlighted point)
    { x: 8, value: 180 }, // Inverted: 60 -> 140
    { x: 9, value: 230 }, // Inverted: 40 -> 160
    { x: 10, value: 300 }, // Inverted: 20 -> 180
  ];

  // Chart component to render only on client
  const ChartComponent = () => {
    if (!isClient) {
      return (
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-cyan-400 text-sm">Loading chart...</div>
        </div>
      );
    }

    // Use require to import recharts on client-side only
    const {
      LineChart,
      Line,
      XAxis,
      YAxis,
      ResponsiveContainer,
      ReferenceLine,
      Tooltip,
      CartesianGrid,
    } = require("recharts");

    // Custom tooltip component
    const CustomTooltip = ({ active, payload, label }: any) => {
      if (active && payload && payload.length) {
        return (
          <div className="bg-black/80 text-white p-2 rounded shadow-lg border border-cyan-400/20">
            <p className="text-cyan-400 text-sm">{`Month: ${label}`}</p>
            <p className="text-white text-sm">{`Value: ${payload[0].value}`}</p>
          </div>
        );
      }
      return null;
    };

    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          {/* Grid lines for better readability */}
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#4AE3C2"
            strokeOpacity={0.1}
          />

          <XAxis
            dataKey="x"
            axisLine={{ stroke: "#4AE3C2", strokeOpacity: 0.3 }}
            tickLine={{ stroke: "#4AE3C2", strokeOpacity: 0.3 }}
            tick={{ fill: "#4AE3C2", fontSize: 12 }}
            label={{
              value: "Time Period",
              position: "insideBottom",
              offset: -10,
              style: { textAnchor: "middle", fill: "#4AE3C2", fontSize: 12 },
            }}
          />
          <YAxis
            axisLine={{ stroke: "#4AE3C2", strokeOpacity: 0.3 }}
            tickLine={{ stroke: "#4AE3C2", strokeOpacity: 0.3 }}
            tick={{ fill: "#4AE3C2", fontSize: 12 }}
            label={{
              value: "Portfolio Value",
              angle: -90,
              position: "insideLeft",
              style: { textAnchor: "middle", fill: "#4AE3C2", fontSize: 12 },
            }}
          />

          {/* Tooltip for hover interactions */}
          <Tooltip
            content={<CustomTooltip />}
            cursor={{
              stroke: "#4AE3C2",
              strokeWidth: 2,
              strokeDasharray: "4 4",
              strokeOpacity: 0.8,
            }}
          />

          <Line
            type="monotone"
            dataKey="value"
            stroke="#4AE3C2"
            strokeWidth={3}
            dot={{ fill: "#4AE3C2", strokeWidth: 2, r: 4 }}
            activeDot={{
              r: 8,
              fill: "#4AE3C2",
              stroke: "#fff",
              strokeWidth: 3,
              filter: "drop-shadow(0px 0px 8px rgba(74, 227, 194, 0.6))",
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    );
  };

  return (
    <section
      className="flex flex-col overflow-hidden items-center justify-center px-[10%] py-[136px] max-md:max-w-full max-md:px-5 max-md:py-[100px] relative"
      style={{
        backgroundImage: "url('/assets/logo.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        backgroundSize: "cover",
      }}
    >
      <div className="flex mb-[-30px] w-[1265px] max-w-full flex-col max-md:mb-2.5 relative z-10">
        <h2 className="text-cyan-400 text-lg font-medium leading-none tracking-[-0.25px]">
          About US
        </h2>
        <div className="bg-cyan-400 flex w-[121px] shrink-0 h-1" />
        <h3 className="text-white text-[48px] font-[350] leading-[56px] tracking-[-1.5px] w-[760px] mt-[26px] max-md:max-w-full max-md:text-[40px] max-md:leading-[54px]">
          We are the best UAE financial distribution provider
        </h3>
        <p className="text-white text-xl font-normal leading-[1.4] tracking-[-0.5px] mt-4 max-md:max-w-full">
          Fast, flexible and secure international money transfers across the
          world.
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
              <svg
                className="w-6 h-6 text-black"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h4 className="text-base font-medium mt-4">
              Fast, reliable transfers
            </h4>
            <p className="text-md font-normal leading-5 text-white/80 mt-2">
              Get same-day transfers on most major currencies.
            </p>
          </div>
          <div className="flex flex-col text-white">
            <div className="bg-cyan-400 rounded-full w-12 h-12 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-black"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h4 className="text-base font-medium mt-4">Global coverage</h4>
            <p className="text-md font-normal leading-5 text-white/80 mt-2">
              Collect and pay like a local, hold up to 35 currencies.
            </p>
          </div>
          <div className="flex flex-col text-white">
            <div className="bg-cyan-400 rounded-full w-12 h-12 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-black"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h4 className="text-base font-medium mt-4">Bank-beating rates</h4>
            <p className="text-md font-normal leading-5 text-white/80 mt-2">
              Paymint exchange rate are cheaper than bank.
            </p>
          </div>
          <div className="flex flex-col text-white">
            <div className="bg-cyan-400 rounded-full w-12 h-12 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-black"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h4 className="text-base font-medium mt-4">Secure & Trusted</h4>
            <p className="text-md font-normal leading-5 text-white/80 mt-2">
              Our security is based on the highest international standards.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-16 max-md:grid-cols-1 max-md:gap-8">
          {/* Precision-Driven Portfolio Growth Card */}
          <div className="bg-[rgba(0,0,0,0.3)] border border-[rgba(255,255,255,0.1)] rounded-xl overflow-hidden p-6">
            <h4 className="text-white text-base font-medium">
              Precision-Driven Portfolio Growth
            </h4>
            <p className="text-white/70 text-md mt-1">
              Every move guided by data and insights for smarter portfolio
              growth.
            </p>
            <div className="mt-4 relative">
              {/* Recharts LineChart - Only render on client */}
              <div className="w-full h-[200px]">
                <ChartComponent />
              </div>
            </div>
          </div>

          {/* Diversified Assets Card and Text */}
          <div className="flex flex-col gap-6">
            <div className="bg-[rgba(0,0,0,0.3)] border border-[rgba(255,255,255,0.1)] rounded-xl overflow-hidden p-6">
              <h4 className="text-white text-base font-medium">
                Diversified Assets
              </h4>
              <p className="text-white/70 text-md mt-1">
                Tailor your portfolio to achieve optimal performance.
              </p>
            </div>

            <div className="bg-[rgba(0,0,0,0.3)] border border-[rgba(255,255,255,0.1)] rounded-xl overflow-hidden p-6">
              <h4 className="text-white text-base font-medium">
                Your Portfolio, Optimized in Real-Time
              </h4>
              <p className="text-white/70 text-md mt-2">
                Adjusted instantly with market changes to enhance investment
                efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
