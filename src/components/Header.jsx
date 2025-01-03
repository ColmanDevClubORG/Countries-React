import React, { useEffect, useState } from 'react';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const redirectHome = () =>{
    window.location.href='index.html'
  }
  useEffect(() => {
    document.querySelector('body').classList.toggle('dark-theme', darkMode);
  }, [darkMode]);

  return (
    <>
      <header className='header'>
        <div className='container flex flex-jc-sb flex-ai-c'>
          <div className='logo'>
            <button className='regular-button' onClick={redirectHome}>
              <h1>Where in the world?</h1>
            </button>
          </div>

          <button
            type='button'
            aria-label='Theme Switcher Button'
            className='theme-toggle flex flex-jc-sb flex-ai-c'
            onClick={toggleDarkMode}
          >
            <i className='fa-regular fa-moon theme-icon'></i>
            <span className='theme-text'>Dark Mode</span>
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
