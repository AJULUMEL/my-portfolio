'use client';

import { useEffect } from 'react';

export default function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Use explicit persisted theme. Default to light for consistent initial experience.
    const storedTheme = localStorage.getItem('theme');
    const theme = storedTheme === 'dark' || storedTheme === 'light' ? storedTheme : 'light';

    if (!storedTheme) {
      localStorage.setItem('theme', theme);
    }

    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return <>{children}</>;
}