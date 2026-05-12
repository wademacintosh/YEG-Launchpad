import React, { createContext, useContext, useMemo, useState, type ReactNode } from 'react';
import { themes, type ThemeTokens } from '../themes';

type ThemeId = keyof typeof themes;

interface ThemeContextType {
  activePreview: ThemeTokens | null;
  setPreview: (themeId: ThemeId | null) => void;
  resetPreview: () => void;
  getThemeTokens: (themeId: string) => ThemeTokens | null;
  isDarkMode: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [activePreview, setActivePreview] = useState<ThemeTokens | null>(null);

  const setPreview = (themeId: ThemeId | null) => {
    if (!themeId) {
      setActivePreview(null);
      return;
    }

    const selectedTheme = themes[themeId];

    if (!selectedTheme) {
      console.warn(`Theme "${themeId}" not found.`);
      setActivePreview(null);
      return;
    }

    setActivePreview(selectedTheme);
  };

  const resetPreview = () => {
    setActivePreview(null);
  };

  const getThemeTokens = (themeId: string): ThemeTokens | null => {
    return themes[themeId as ThemeId] ?? null;
  };

  const value = useMemo(
    () => ({
      activePreview,
      setPreview,
      resetPreview,
      getThemeTokens,
      isDarkMode: activePreview?.isDark ?? false,
    }),
    [activePreview]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useThemePreview = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useThemePreview must be used within ThemeProvider');
  }

  return context;
};

