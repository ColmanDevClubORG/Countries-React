import React from "react";
import { useState } from "react";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode)
        document.body.classList.toggle("dark-theme", isDarkMode);
    }
    return (
        <button
         type="button" 
         aria-label="Theme Switcher Button" 
         className="theme-toggle flex flex-jc-sb flex-ai-c" 
         onClick={toggleTheme}>


        <i className={`fa-${isDarkMode ? "solid" : "regular"} fa-moon theme-icon`}></i>
        <span className="theme-text">{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
 </button >
    )
}