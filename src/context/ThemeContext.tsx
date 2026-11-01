import React from 'react';

// Shakti Abhushan Atelier is permanently in bright luxury light mode (Warm Ivory & Pure White)
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

export const useTheme = () => ({
  theme: 'light' as const,
  toggleTheme: () => {},
  isDark: false,
});
