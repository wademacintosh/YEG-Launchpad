import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white border-b border-[#BDC3C7]">
      <Link to="/" className="text-2xl font-black tracking-tighter uppercase">
        YEG <span className="text-[#FF6600]">Launchpad</span>
      </Link>
      <div className="hidden md:flex gap-8">
        <Link to="/" className="text-sm font-bold uppercase tracking-widest hover:text-[#FF6600] transition">
          Gallery
        </Link>
      </div>
    </nav>
  );
}
