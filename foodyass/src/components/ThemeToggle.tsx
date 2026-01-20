"use client";

import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg hover:bg-light-primaryContainer/40 dark:hover:bg-dark-primaryContainer/40 transition-colors duration-200 flex items-center justify-center"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <span className="text-light-onSurface dark:text-dark-onSurface text-body-medium">
          🌙
        </span>
      ) : (
        <span className="text-light-onSurface dark:text-dark-onSurface text-body-medium">
          ☀️
        </span>
      )}
    </button>
  );
};

export default ThemeToggle;