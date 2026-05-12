import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { themes } from '../themes';
import { useThemePreview } from '../context/ThemeContext';

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isStylesOpen, setIsStylesOpen] = useState(false);
  const { activePreview, isDarkMode } = useThemePreview();

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileOpen(false);
        setIsStylesOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  const navShellClass = activePreview
    ? `${activePreview.containerBg} ${activePreview.containerText} ${activePreview.containerBorder}`
    : 'bg-white/80 text-asphalt backdrop-blur-md border-b border-gray-100';

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    [
      'text-sm font-bold uppercase tracking-widest transition-opacity hover:opacity-100',
      activePreview ? 'text-current opacity-70' : 'text-asphalt opacity-60',
      isActive ? 'opacity-100' : '',
    ].join(' ');

  const dropdownPanelClass = activePreview
    ? isDarkMode
      ? 'bg-slate-900/95 border border-white/10 text-white backdrop-blur-xl'
      : 'bg-white/95 border border-black/10 text-asphalt backdrop-blur-xl'
    : 'bg-white border border-gray-100 text-asphalt';

  const ctaClass = activePreview
    ? `${activePreview.buttonBg} ${activePreview.buttonText}`
    : 'bg-ignition text-white shadow-orange-500/20';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${navShellClass}`} aria-label="Primary navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center group" onClick={() => setIsMobileOpen(false)}>
            <span className={`text-2xl font-black italic tracking-tighter transition-colors ${activePreview ? 'text-current' : 'text-ignition'}`}>
              YEG <span className={activePreview ? 'opacity-80' : 'text-asphalt'}>LAUNCHPAD</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" end className={navLinkClass}>
              Home
            </NavLink>

            <div
              className="relative"
              onMouseEnter={() => setIsStylesOpen(true)}
              onMouseLeave={() => setIsStylesOpen(false)}
            >
              <button
                type="button"
                aria-expanded={isStylesOpen}
                aria-controls="styles-menu"
                className={`flex items-center text-sm font-bold uppercase tracking-widest hover:opacity-100 transition-opacity ${
                  activePreview ? 'text-current opacity-70' : 'text-asphalt opacity-60'
                }`}
                onClick={() => setIsStylesOpen((prev) => !prev)}
              >
                Styles <ChevronDown size={14} className="ml-1" />
              </button>

              {isStylesOpen && (
                <div
                  id="styles-menu"
                  className={`absolute top-full left-0 w-64 shadow-2xl rounded-2xl py-3 mt-2 animate-fade-in ${dropdownPanelClass}`}
                >
                  {Object.values(themes).map((theme) => (
                    <Link
                      key={theme.id}
                      to={`/theme/${theme.id}`}
                      className={`block px-6 py-3 text-sm font-bold transition-colors ${
                        activePreview
                          ? isDarkMode
                            ? 'hover:bg-white/10 hover:text-white'
                            : 'hover:bg-black/5 hover:text-ignition'
                          : 'hover:bg-gray-50 hover:text-ignition'
                      }`}
                      onClick={() => setIsStylesOpen(false)}
                    >
                      {theme.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <NavLink
              to="/contact"
              className={`px-6 py-2 rounded-xl font-black text-sm uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-lg ${ctaClass}`}
            >
              Get Started
            </NavLink>
          </div>

          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsMobileOpen((prev) => !prev)}
              aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileOpen}
              aria-controls="mobile-menu"
              className={activePreview ? 'text-current' : 'text-asphalt'}
            >
              {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileOpen && (
        <div
          id="mobile-menu"
          className={`md:hidden border-t transition-colors duration-500 animate-in slide-in-from-top ${
            activePreview
              ? isDarkMode
                ? 'bg-black/40 backdrop-blur-xl border-white/10'
                : 'bg-white/80 backdrop-blur-xl border-black/10'
              : 'bg-white'
          }`}
        >
          <div className="px-4 pt-4 pb-8 space-y-4">
            <NavLink
              to="/"
              end
              onClick={() => setIsMobileOpen(false)}
              className="block text-lg font-black uppercase tracking-tight"
            >
              Home
            </NavLink>

            <div className="pt-2">
              <p className={`text-[10px] font-black uppercase tracking-[0.2em] mb-4 ${activePreview ? 'opacity-60' : 'text-gray-400'}`}>
                Available Styles
              </p>

              <div className="grid grid-cols-1 gap-2">
                {Object.values(themes).map((theme) => (
                  <Link
                    key={theme.id}
                    to={`/theme/${theme.id}`}
                    onClick={() => setIsMobileOpen(false)}
                    className={`block py-2 font-bold transition-opacity ${
                      activePreview ? 'text-current opacity-70 hover:opacity-100' : 'text-asphalt opacity-70 hover:opacity-100'
                    }`}
                  >
                    {theme.name}
                  </Link>
                ))}
              </div>
            </div>

            <NavLink
              to="/contact"
              onClick={() => setIsMobileOpen(false)}
              className={`block py-4 text-center rounded-xl font-black uppercase tracking-widest ${ctaClass}`}
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

