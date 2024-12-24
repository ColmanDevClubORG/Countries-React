import React, { useEffect, useState } from 'react'

const Header = () => {
  const [darkMode, setDarkMode] = useState(false)

  const displayDarkMode = () => {
    setDarkMode(!darkMode)
  }

  useEffect(()=>{
    if(darkMode) document.body.classList.add('dark-theme')
    else document.body.classList.remove('dark-theme')
  },[darkMode])

  return (
    <>
      <header className="header">
        <div className="container flex flex-jc-sb flex-ai-c">
          <div className="logo">
            <button className="regular-button" onClick={() => window.location.href = 'index.html'}>
              <h1>Where in the world?</h1>
            </button>
          </div>

          <button
            type="button"
            aria-label="Theme Switcher Button"
            className="theme-toggle flex flex-jc-sb flex-ai-c"
            onClick={() => { displayDarkMode() }}
          >
            <i className="fa-regular fa-moon theme-icon"></i>
            <span className="theme-text">Dark Mode</span>
          </button>
        </div>
      </header>
    </>
  )
}

export default Header;