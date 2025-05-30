import React from "react";

const BackgroundEffects = () => {
  return (
    <>
      <style jsx global>{`
        @keyframes blurExpand {
          0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(3.3);
          }
        }

        @keyframes fadeInOut {
          0% {
            opacity: 0;
          }
          20% {
            opacity: 0.3;
          }
          80% {
            opacity: 0.3;
          }
          100% {
            opacity: 0;
          }
        }

        .blur-expand-animation {
          animation:
            blurExpand 18s ease-in-out infinite,
            fadeInOut 18s ease-in-out infinite;
          transform-origin: center center;
          width: 300px;
          height: 300px;
          opacity: 0;
        }
      `}</style>

      {/* Background Gradient */}
      <div
        className="absolute inset-0 w-full"
        style={{
          height: "160vh",
          background: ` linear-gradient(180deg, rgba(0, 65, 118, 0.90) 0%, rgba(0, 68, 116, 0.88) 0.61%, rgba(1, 75, 113, 0.83) 5.7%, rgba(2, 95, 104, 0.68) 22.14%, rgba(5, 160, 73, 0.20) 56.92%, rgba(122, 204, 158, 0.11) 68.57%, rgba(232, 240, 255, 0.05) 100%),  linear-gradient(180deg, rgba(1, 75, 113, 0.50) 5.7%, rgba(2, 95, 104, 0.41) 22.14%, rgba(5, 160, 73, 0.24) 56.92%, rgba(232, 240, 255, 0.03) 100%)`,
        }}
      />

      {/* First Animated White Blur Circle */}
      <div className="absolute inset-0 pointer-events-none z-1">
        <div
          className="blur-expand-animation absolute top-[70%] left-1/2 rounded-full"
          style={{
            background: ` radial-gradient(50% 50% at 50% 50%, 
            rgba(38, 80, 115, 0.40) 0.07%, 
            rgba(39, 99, 110, 0.40) 13.07%, 
            rgba(100, 146, 145, 0.38) 49.57%, 
            rgba(134, 181, 170, 0.32) 72.3%, 
            rgba(191, 231, 208, 0.24) 96%, 
            rgba(255, 255, 255, 0.25) 100%)`,
          }}
        ></div>
      </div>

      {/* Second Animated White Blur Circle (6s delay) */}
      <div className="absolute inset-0 pointer-events-none z-1">
        <div
          className="blur-expand-animation absolute top-[70%] left-1/2 rounded-full"
          style={{
            animationDelay: "6s",
            background: ` radial-gradient(50% 50% at 50% 50%, 
            rgba(38, 80, 115, 0.40) 0.07%, 
            rgba(39, 99, 110, 0.40) 13.07%, 
            rgba(100, 146, 145, 0.38) 49.57%, 
            rgba(134, 181, 170, 0.32) 72.3%, 
            rgba(191, 231, 208, 0.24) 96%, 
            rgba(255, 255, 255, 0.25) 100%)`,
          }}
        ></div>
      </div>

      {/* Third Animated White Blur Circle (12s delay) */}
      <div className="absolute inset-0 pointer-events-none z-1">
        <div
          className="blur-expand-animation absolute top-[70%] left-1/2 rounded-full"
          style={{
            animationDelay: "12s",
            background: ` radial-gradient(50% 50% at 50% 50%, 
            rgba(38, 80, 115, 0.40) 0.07%, 
            rgba(39, 99, 110, 0.40) 13.07%, 
            rgba(100, 146, 145, 0.38) 49.57%, 
            rgba(134, 181, 170, 0.32) 72.3%, 
            rgba(191, 231, 208, 0.24) 96%, 
            rgba(255, 255, 255, 0.25) 100%)`,
          }}
        ></div>
      </div>
    </>
  );
};

export default BackgroundEffects;
