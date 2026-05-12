import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Eye, Sparkles } from 'lucide-react';
import { themes } from '../themes';
import { useThemePreview } from '../context/ThemeContext';
import ThemeDemo from '../components/ThemeDemo';

const ThemeShowcase = () => {
  const { themeId } = useParams<{ themeId: string }>();
  const { activePreview, setPreview, isDarkMode } = useThemePreview();

  const theme = themeId ? themes[themeId as keyof typeof themes] : null;

  if (!theme) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 bg-white">
        <div className="text-center">
          <h1 className="text-3xl font-black uppercase tracking-tight text-asphalt mb-4">
            Theme not found
          </h1>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-ignition"
          >
            <ArrowLeft size={16} />
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  const isCurrentlyPreviewing = activePreview?.id === theme.id;

  const shellClass = activePreview
    ? isDarkMode
      ? 'bg-[#0a0a0a] text-white'
      : 'bg-[#f8f5ef] text-asphalt'
    : 'bg-white text-asphalt';

  const heroPanelClass = `${theme.containerBg} ${theme.containerText} ${theme.containerBorder}`;

  const previewButtonClass = isCurrentlyPreviewing
    ? 'bg-white text-asphalt ring-4 ring-ignition'
    : `${theme.buttonBg} ${theme.buttonText}`;

  const bodyCopyClass = activePreview
    ? isDarkMode
      ? 'text-white/70'
      : 'text-asphalt/70'
    : 'text-gray-600';

  return (
    <div className={`min-h-screen transition-all duration-1000 ${shellClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <Link
          to="/"
          className={`inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] mb-8 transition-opacity hover:opacity-100 ${
            activePreview ? 'opacity-70 text-current' : 'opacity-60 text-asphalt'
          }`}
        >
          <ArrowLeft size={14} />
          Back to home
        </Link>

        <div
          className={`relative overflow-hidden p-8 md:p-20 rounded-[2.5rem] transition-all duration-1000 ${heroPanelClass}`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10 pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center">
                <Sparkles size={22} className="text-white" />
              </div>

              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-white/70">
                Theme showcase
              </span>
            </div>

            <h1 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter mb-6">
              {theme.name}
            </h1>

            <p className="text-sm md:text-lg font-medium leading-relaxed text-white/85 max-w-2xl mb-8">
              {theme.description}
            </p>

            <button
              type="button"
              onClick={() => setPreview(isCurrentlyPreviewing ? null : theme.id)}
              className={`inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-sm font-black uppercase tracking-widest transition-all hover:scale-[1.02] active:scale-[0.98] ${previewButtonClass}`}
            >
              <Eye size={18} />
              {isCurrentlyPreviewing ? 'Preview Active' : 'Preview This Theme'}
            </button>
          </div>
        </div>

        <div className="mt-16">
          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight mb-4">
              Live component demo
            </h2>

            <p className={`text-base font-medium leading-relaxed ${bodyCopyClass}`}>
              This preview shows how the theme behaves across buttons, surfaces, text hierarchy,
              and interactive UI patterns using the current token system.
            </p>
          </div>

          <ThemeDemo theme={theme} />
        </div>
      </div>
    </div>
  );
};

export default ThemeShowcase;

