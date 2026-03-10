'use client';

import { useEffect, useMemo, useState } from 'react';

type ThemeColors = {
  primaryColor: string;
  primaryColorFlat: string;
  secondaryColor: string;
};

const defaults: ThemeColors = {
  primaryColor: 'linear-gradient(135deg, #c39a37 0%, #b8860b 100%)',
  primaryColorFlat: '#d4af37',
  secondaryColor: '#001f3f',
};

const readFromStorage = (fallbacks: ThemeColors): ThemeColors => {
  if (typeof window === 'undefined') return defaults;
  return {
    primaryColor:
      localStorage.getItem('theme_primary') ||
      fallbacks.primaryColor ||
      'linear-gradient(135deg, #a67c00 0%, #bf9b30 25%, #ffd700 50%, #d4af37 75%, #b8860b 100%)',
    primaryColorFlat:
      localStorage.getItem('theme_primary_flat') || fallbacks.primaryColorFlat,
    secondaryColor:
      localStorage.getItem('theme_secondary') || fallbacks.secondaryColor,
  };
};

export const useThemeColors = (overrides: Partial<ThemeColors> = {}) => {
  const fallbackColors = useMemo(
    () => ({ ...defaults, ...overrides }),
    [overrides]
  );
  const [colors, setColors] = useState<ThemeColors>(fallbackColors);

  useEffect(() => {
    setColors(readFromStorage(fallbackColors));
  }, [fallbackColors]);

  return colors;
};
