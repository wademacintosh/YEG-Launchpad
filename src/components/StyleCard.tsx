import React from 'react';
import { ThemeDefinition } from '../lib/themes';

interface StyleCardProps {
  theme: ThemeDefinition;
}

export default function StyleCard({ theme }: StyleCardProps) {
  return (
    <div 
      className="p-6 border transition-all" 
      style={{ 
        backgroundColor: theme.tokens.bg, 
        borderColor: theme.tokens.border,
        borderRadius: theme.tokens.radius
      }}
    >
      <h3 
        className="text-xl font-bold uppercase mb-2" 
        style={{ color: theme.tokens.fg, fontFamily: theme.tokens.fontHeading }}
      >
        {theme.title}
      </h3>
      <p className="text-sm opacity-70" style={{ color: theme.tokens.fg }}>
        {theme.category}
      </p>
    </div>
  );
}
