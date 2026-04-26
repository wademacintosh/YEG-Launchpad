import React from 'react';
import { Link } from 'react-router-dom';
import { themes } from '../lib/themes';
import { ArrowRight } from 'lucide-react';

export default function StyleGallery() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {themes.map((theme) => (
          <div 
            key={theme.slug} 
            className="group relative border-2 p-10 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between min-h-[400px] shadow-sm hover:shadow-2xl"
            style={{
              backgroundColor: theme.tokens.bg,
              borderColor: theme.tokens.border,
              borderRadius: theme.tokens.radius 
            }}
          >
            <div>
              <h3 
                className="text-4xl font-black mb-6 uppercase leading-tight tracking-tighter"
                style={{
                  color: theme.tokens.fg, 
                  fontFamily: theme.tokens.fontHeading 
                }}
              >
                {theme.title}
              </h3>
              <p 
                className="text-base mb-8 opacity-80 leading-relaxed max-w-[280px]" 
                style={{ color: theme.tokens.fg }}
              >
                {theme.tagline}
              </p>
            </div>

            <Link 
              to={`/theme/${theme.slug}`} 
              className="inline-flex items-center gap-3 font-black uppercase text-xs tracking-widest transition-all hover:gap-5"
              style={{ color: theme.tokens.accent }}
            >
              <span>Explore Preview</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
