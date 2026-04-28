import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { themes } from '../themes';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="text-2xl font-bold text-ignition">YEG Launchpad</Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-ignition">Home</Link>
            <div className="relative group">
              <button className="flex items-center text-gray-600 hover:text-ignition">
                Themes <ChevronDown size={16} className="ml-1" />
              </button>
              <div className="absolute top-full left-0 hidden group-hover:block w-48 bg-white shadow-lg rounded-md py-2">
                {Object.keys(themes).map((theme) => (
                  <Link 
                    key={theme} 
                    to={`/theme/${theme}`} 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                  >
                    {theme.charAt(0).toUpperCase() + theme.slice(1)} Style
                  </Link>
                ))}
              </div>
            </div>
            <Link to="/contact" className="bg-ignition text-white px-5 py-2 rounded-full hover:bg-blue-700">Get Started</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b animate-in slide-in-from-top">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <Link to="/" className="block py-2 text-gray-600">Home</Link>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider pt-2">Themes</p>
            {Object.keys(themes).map((theme) => (
              <Link key={theme} to={`/theme/${theme}`} className="block py-2 pl-4 text-gray-600 capitalize">
                {theme} Style
              </Link>
            ))}
            <Link to="/contact" className="block py-2 text-ignition font-semibold">Contact Us</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
