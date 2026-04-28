import React, { createContext, useContext, useState, ReactNode } from 'react';
import { themes, Theme } from '../themes';

interface ThemeContextType {
  activePreview: Theme | null;
  setPreview: (themeId: string | null) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [activePreview, setActivePreview] = useState<Theme | null>(null);

  const setPreview = (themeId: string | null) => {
    if (!themeId) {
      setActivePreview(null);
    } else {
      setActivePreview(themes[themeId]);
    }
  };

  return (
    <ThemeContext.Provider value={{ activePreview, setPreview }}>
      <div className={activePreview ? activePreview.containerClass : ''}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useThemePreview = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useThemePreview must be used within ThemeProvider');
  return context;
};
