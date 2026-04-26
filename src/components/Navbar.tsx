import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100">
      <Link to="/" className="text-xl font-black tracking-tighter uppercase">
        YEG <span className="text-[#FF6600]">Launchpad</span>
      </Link>
      <div className="flex gap-6">
        <Link to="/" className="text-sm font-bold uppercase hover:text-[#FF6600] transition">Gallery</Link>
      </div>
    </nav>
  );
}
