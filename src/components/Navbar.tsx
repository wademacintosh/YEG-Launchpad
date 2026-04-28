import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { themes } from '../themes';
import { useThemePreview } from '../context/ThemeContext'; // Import the preview hook

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { activePreview } = useThemePreview(); // Listen for active previews

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 
      ${activePreview 
        ? activePreview.containerClass 
        : 'bg-white/80 backdrop-blur-md border-b border-gray-100'}`}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo Branding */}
          <Link to="/" className="flex items-center group">
            <span className={`text-2xl font-black italic tracking-tighter transition-colors
              ${activePreview ? 'text-current' : 'text-ignition'}`}>
              YEG <span className={activePreview ? 'opacity-80' : 'text-asphalt'}>LAUNCHPAD</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`text-sm font-bold uppercase tracking-widest hover:opacity-100 transition-opacity
              ${activePreview ? 'text-current opacity-70' : 'text-asphalt opacity-60'}`}>
              Home
            </Link>

            {/* Themes Dropdown */}
            <div className="relative group">
              <button className={`flex items-center text-sm font-bold uppercase tracking-widest hover:opacity-100 transition-opacity
                ${activePreview ? 'text-current opacity-70' : 'text-asphalt opacity-60'}`}>
                Styles <ChevronDown size={14} className="ml-1" />
              </button>
              
              <div className="absolute top-full left-0 hidden group-hover:block w-64 bg-white shadow-2xl rounded-2xl py-3 mt-0 border border-gray-100 animate-fade-in">
                {Object.values(themes).map((theme) => (
                  <Link 
                    key={theme.id} 
                    to={`/theme/${theme.id}`} 
                    className="block px-6 py-3 text-sm font-bold text-asphalt hover:bg-gray-50 hover:text-ignition transition-colors"
                  >
                    {theme.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Dynamic CTA Button */}
            <Link 
              to="/contact" 
              className={`px-6 py-2 rounded-xl font-black text-sm uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-lg
                ${activePreview 
                  ? activePreview.buttonClass 
                  : 'bg-ignition text-white shadow-orange-500/20'}`}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={activePreview ? 'text-current' : 'text-asphalt'}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={`md:hidden border-t transition-colors duration-500 animate-in slide-in-from-top
          ${activePreview ? 'bg-current/10 backdrop-blur-xl' : 'bg-white'}`}>
          <div className="px-4 pt-4 pb-8 space-y-4">
            <Link 
              to="/" 
              onClick={() => setIsOpen(false)}
              className="block text-lg font-black uppercase tracking-tight"
            >
              Home
            </Link>
            <div className="pt-2">
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4">Available Styles</p>
              <div className="grid grid-cols-1 gap-2">
                {Object.values(themes).map((theme) => (
                  <Link 
                    key={theme.id} 
                    to={`/theme/${theme.id}`} 
                    onClick={() => setIsOpen(false)}
                    className="block py-2 text-asphalt font-bold opacity-70 hover:opacity-100"
                  >
                    {theme.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link 
              to="/contact" 
              onClick={() => setIsOpen(false)}
              className="block py-4 bg-ignition text-white text-center rounded-xl font-black uppercase tracking-widest"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
