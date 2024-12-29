/* eslint-disable react/prop-types */
import React , {useState} from "react";


const Header = ({ onThemeToggle }) => {

    const [darkTheme, setDarkTheme] = useState(false);

    const onThemeToggle1 = () => {
        const newTheme = !darkTheme;
        setDarkTheme(newTheme);
        onThemeToggle(newTheme);
    };

  return (
    <header className="header">
      <div className="container flex flex-jc-sb flex-ai-c">
        <div className="logo">
          <a href="/">
            <h1>Where in the world?</h1>
          </a>
        </div>
        <button 
          type="button"
          aria-label="Theme Switcher Button"
          className="theme-toggle flex flex-jc-sb flex-ai-c"
          onClick={onThemeToggle1} // Handle theme switching
        >
          <i className="fa-regular fa-moon theme-icon"></i>
          <span className="theme-text">{darkTheme ? "Light Mode" : "Dark Mode"}</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
