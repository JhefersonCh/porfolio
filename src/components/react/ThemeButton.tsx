import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  const handleToggleClick = () => {
    const element = document.documentElement;
    const currentTheme = element.classList.contains('dark') ? 'dark' : 'light';

    if (currentTheme === 'dark') {
      element.classList.remove('dark');
      element.classList.add('light');
    } else {
      element.classList.remove('light');
      element.classList.add('dark');
    }

    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <button
      onClick={handleToggleClick}
      className={
        'border-0 bg-transparent p-2 hover:scale-125 transition-all duration-300 fixed top-3 right-4 z-50'
      }
      type="button"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          width="24"
          height="24"
          strokeWidth="2"
          className="sun "
        >
          <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
          <path d="M4 12h.01"></path>
          <path d="M12 4v.01"></path>
          <path d="M20 12h.01"></path>
          <path d="M12 20v.01"></path>
          <path d="M6.31 6.31l-.01 -.01"></path>
          <path d="M17.71 6.31l-.01 -.01"></path>
          <path d="M17.7 17.7l.01 .01"></path>
          <path d="M6.3 17.7l.01 .01"></path>
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="24"
          height="24"
          className="moon"
        >
          <path d="M12 1.992a10 10 0 1 0 9.236 13.838c.341 -.82 -.476 -1.644 -1.298 -1.31a6.5 6.5 0 0 1 -6.864 -10.787l.077 -.08c.551 -.63 .113 -1.653 -.758 -1.653h-.266l-.068 -.006l-.06 -.002z"></path>
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle;
