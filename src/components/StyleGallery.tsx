import React from 'react';
import { Link } from 'react-router-dom';
import { themes } from '../lib/themes';
import { ArrowRight } from 'lucide-react';

export default function StyleGallery() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {themes.map((theme) => (
          <div 
            key={theme.slug} 
            className="border p-8 transition-transform hover:scale-[1.02] flex flex-col justify-between min-h-[300px]" 
            style={{ 
              backgroundColor: theme.tokens.bg,
              borderColor: theme.tokens.border,
              borderRadius: theme.tokens.radius 
            }}
          >
            <div>
              <h3 
                className="text-3xl font-black mb-4 uppercase" 
                style={{ 
                  color: theme.tokens.fg,
                  fontFamily: theme.tokens.fontHeading 
                }}
              >
                {theme.title}
              </h3>
              <p 
                className="text-sm mb-8 opacity-70" 
                style={{ color: theme.tokens.fg }}
              >
                {theme.tagline}
              </p>
            </div>
            
            <Link 
              to={`/theme/${theme.slug}`} 
              className="font-bold uppercase text-sm flex items-center gap-2 mt-auto" 
              style={{ color: theme.tokens.accent }}
            >
              Preview Style <ArrowRight size={16} />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
