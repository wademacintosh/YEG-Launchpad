import React from 'react';
import { ThemeDefinition } from '../lib/themes';

interface ThemeDemoProps {
  theme: ThemeDefinition;
}

export default function ThemeDemo({ theme }: ThemeDemoProps) {
  return (
    <div 
      className="min-h-screen p-12" 
      style={{ 
        backgroundColor: theme.tokens.bg, 
        color: theme.tokens.fg, 
        fontFamily: theme.tokens.fontBody 
      }}
    >
      <div className="max-w-4xl mx-auto">
        <h1 
          className="text-6xl font-black uppercase mb-4" 
          style={{ fontFamily: theme.tokens.fontHeading }}
        >
          {theme.title}
        </h1>
        <p className="text-xl mb-8 opacity-80">{theme.tagline}</p>
        
        <button 
          className="px-8 py-4 text-lg font-bold transition-transform hover:scale-105" 
          style={{ 
            backgroundColor: theme.tokens.accent, 
            color: theme.tokens.accentFg,
            borderRadius: theme.tokens.radius
          }}
        >
          {theme.heroCta}
        </button>
      </div>
    </div>
  );
}
