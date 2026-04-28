import React, { createContext, useContext, useState, ReactNode } from 'react';
import { themes, Theme } from '../themes';

interface ThemeContextType {
  activePreview: Theme | null;
  setPreview: (themeId: string | null) => void;
  resetPreview: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [activePreview, setActivePreview] = useState<Theme | null>(null);

  // Robust setter to handle theme selection
  const setPreview = (themeId: string | null) => {
    if (!themeId) {
      setActivePreview(null);
    } else {
      const selectedTheme = themes[themeId];
      if (selectedTheme) {
        setActivePreview(selectedTheme);
      }
    }
  };

  const resetPreview = () => setActivePreview(null);

  return (
    <ThemeContext.Provider value={{ activePreview, setPreview, resetPreview }}>
      {/* We removed the <div> from here. 
          The classes will be handled strictly by AppLayout in App.tsx 
          to avoid layering conflicts. */}
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemePreview = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useThemePreview must be used within ThemeProvider');
  return context;
};
