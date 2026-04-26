import React from 'react';
import { Link } from 'react-router-dom';
import { ThemeDefinition } from '../lib/themes';

interface StyleCardProps {
  theme: ThemeDefinition;
}

export default function StyleCard({ theme }: StyleCardProps) {
  return (
    <Link 
      to={`/theme/${theme.id}`} 
      className="block no-underline group"
    >
      <div 
        className="p-8 border-2 transition-all duration-300 transform group-hover:-translate-y-1 group-hover:shadow-xl h-full flex flex-col justify-between"
        style={{
          backgroundColor: theme.tokens.bg,
          borderColor: theme.tokens.border,
          borderRadius: theme.tokens.radius,
        }}
      >
        <div>
          <span 
            className="text-xs font-black uppercase tracking-widest mb-4 block opacity-60"
            style={{ color: theme.tokens.fg }}
          >
            {theme.category}
          </span>
          
          <h3 
            className="text-2xl font-bold uppercase leading-tight mb-4" 
            style={{ 
              color: theme.tokens.fg, 
              fontFamily: theme.tokens.fontHeading 
            }}
          >
            {theme.title}
          </h3>
        </div>

        <div className="flex items-center gap-2 mt-6">
          <div 
            className="w-8 h-1" 
            style={{ backgroundColor: theme.tokens.fg }} 
          />
          <span 
            className="text-xs font-bold uppercase tracking-tighter"
            style={{ color: theme.tokens.fg }}
          >
            Explore Style
          </span>
        </div>
      </div>
    </Link>
  );
}
