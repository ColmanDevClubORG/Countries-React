import 'react';

const ThemeToggle = ({theme, toggleTheme}) => {
    return (
        <button
            type="button"
            aria-label="Theme Switcher Button"
            className="theme-toggle flex flex-jc-sb flex-ai-c"
            onClick={toggleTheme}>
            <i className={`fa-regular ${theme === "dark" ? "fa-sun" : "fa-moon"} theme-icon`}></i>
            <span className="theme-text">{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
        </button>
    );
};
export default ThemeToggle;