import React from 'react';

export default function BridgeDivider() {
  return (
    <div className="w-full bg-white py-12 flex flex-col items-center justify-center">
      <svg width="200" height="40" viewBox="0 0 200 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 35 C 50 0, 150 0, 200 35" stroke="#BDC3C7" strokeWidth="2" fill="none"/>
        <path d="M20 35 L 20 28 M 60 35 L 60 15 M 100 35 L 100 10 M 140 35 L 140 15 M 180 35 L 180 28" stroke="#BDC3C7" strokeWidth="1"/>
      </svg>
      <span className="text-[10px] uppercase tracking-[0.3em] text-[#BDC3C7] mt-4 font-bold">
        Walterdale · Edmonton
      </span>
    </div>
  );
}
