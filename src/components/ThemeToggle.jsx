// import React, { useContext } from 'react';
// import { ThemeContext } from './ThemeProvider';
// import '../styles/ThemeToggle.css';

// const ThemeToggle = () => {
//   const { theme, toggleTheme } = useContext(ThemeContext);

//   return (
//     <button className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>
//       {theme === 'light' ? '🌙' : '☀️'}
//     </button>
//   );
// };

// export default ThemeToggle;

import React, { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';
import '../styles/ThemeToggle.css';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>
      <span className={`${(theme === 'dark') ? "mage--sun-fill" : "mage--moon-fill"}`}></span>
    </button>
  );
};

export default ThemeToggle;