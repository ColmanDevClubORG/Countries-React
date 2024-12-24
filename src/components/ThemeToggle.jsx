import React from 'react';

const ThemeToggle = () => {
    return (
        <button type="button" aria-label="Theme Switcher Button" className="theme-toggle flex flex-jc-sb flex-ai-c">
            <i className="fa-regular fa-moon theme-icon"></i>
            <span className="theme-text">Dark Mode</span>
        </button>
    );
};

export default ThemeToggle;