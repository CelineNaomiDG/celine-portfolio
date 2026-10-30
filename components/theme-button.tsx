'use client';

import { Sun, Moon } from 'lucide-react';
import { useEffect, useSyncExternalStore } from 'react';

type ThemeButtonProps = { language?: 'en' | 'nl'; className?: string };

function subscribeToTheme(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class'],
  });
  return () => observer.disconnect();
}

const getThemeSnapshot = () =>
  document.documentElement.classList.contains('dark');
const getServerTheme = () => false;

export default function ThemeButton({
  language = 'en',
  className = '',
}: ThemeButtonProps) {
  const dark = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getServerTheme,
  );

  useEffect(() => {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem('portfolio-theme');
    } catch {
      /* System preference remains available. */
    }
    const initial = saved
      ? saved === 'dark'
      : window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.toggle('dark', initial);
  }, []);

  function toggle() {
    const next = !dark;
    document.documentElement.classList.toggle('dark', next);
    try {
      localStorage.setItem('portfolio-theme', next ? 'dark' : 'light');
    } catch {
      /* Theme still works for this visit. */
    }
  }

  const dutch = language === 'nl';
  const label = dutch
    ? dark
      ? 'Schakel naar licht thema'
      : 'Schakel naar donker thema'
    : dark
      ? 'Switch to light mode'
      : 'Switch to dark mode';

  return (
    <button
      type="button"
      className={`themeButton ${className}`}
      onClick={toggle}
      aria-label={label}
      aria-pressed={dark}
    >
      {dark ? (
        <Sun size={18} aria-hidden="true" />
      ) : (
        <Moon size={18} aria-hidden="true" />
      )}
      <span>
        {dark ? (dutch ? 'Licht' : 'Light') : dutch ? 'Donker' : 'Dark'}
      </span>
    </button>
  );
}
