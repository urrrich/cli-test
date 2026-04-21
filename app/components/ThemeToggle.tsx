'use client';

import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem('theme');
    } catch {
      saved = null;
    }
    const initial: Theme = saved === 'dark' ? 'dark' : 'light';
    document.documentElement.dataset.theme = initial;
    setTheme(initial);
  }, []);

  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    setTheme(next);
    try {
      localStorage.setItem('theme', next);
    } catch {
      /* ignore */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className="theme-toggle"
      aria-label="切换主题"
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  );
}
