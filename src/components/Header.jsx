import React, { useState } from "react";

export const Header = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);

        if (!isDarkMode) {
            document.body.classList.add("dark-theme",!isDarkMode);
        } else {
            document.body.classList.remove("dark-theme");
        }
    };

    return (
        <header className="header">
            <div className="container flex flex-jc-sb flex-ai-c">
                <div className="logo">
                    <a href="index.html">
                        <h1>Where in the world?</h1>
                    </a>
                </div>
                <button
                    type="button"
                    aria-label="Theme Switcher Button"
                    className="theme-toggle flex flex-jc-sb flex-ai-c"
                    onClick={toggleTheme}
                >
                    <i className={`fa-regular ${isDarkMode ? "fa-sun" : "fa-moon"} theme-icon`}></i>
                    <span className="theme-text">{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
                </button>
            </div>
        </header>
    );
};
