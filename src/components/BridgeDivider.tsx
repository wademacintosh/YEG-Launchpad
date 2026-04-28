import React from 'react';

const BridgeDivider = () => {
  return (
    <div className="relative w-full overflow-hidden bg-white">
      {/* The Divider SVG */}
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-[100px] md:h-[150px] lg:h-[200px]"
        preserveAspectRatio="none"
      >
        {/* Main Bridge Arch acting as the line */}
        <path
          d="M0 120C240 40 480 0 720 0C960 0 1200 40 1440 120"
          stroke="url(#bridge-gradient)"
          strokeWidth="4"
          fill="transparent"
        />
        
        {/* Subtle fill under the bridge */}
        <path
          d="M0 120C240 40 480 0 720 0C960 0 1200 40 1440 120V120H0Z"
          fill="url(#area-gradient)"
          fillOpacity="0.05"
        />

        <defs>
          <linearGradient id="bridge-gradient" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3B82F6" /> {/* Blue-500 */}
            <stop offset="0.5" stopColor="#2563EB" /> {/* Blue-600 */}
            <stop offset="1" stopColor="#3B82F6" />
          </linearGradient>
          
          <linearGradient id="area-gradient" x1="720" y1="0" x2="720" y2="120" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3B82F6" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
        </defs>
      </svg>

      {/* Optional: Subtle glow line directly under the bridge */}
      <div className="absolute bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-100 to-transparent shadow-[0_4px_20px_rgba(59,130,246,0.1)]" />
    </div>
  );
};

export default BridgeDivider;
