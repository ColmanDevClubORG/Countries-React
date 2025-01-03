import 'react';
/**
 * ThemeToggle Component
 * Button to switch between light and dark themes.
 *
 * Props:
 * - theme: Current theme ("light" or "dark").
 * - toggleTheme: Function to toggle the theme.
 */
const ThemeToggle = ({theme, toggleTheme}) => {
    const isDarkTheme = theme === "dark";
    return (
        <button
            type="button"
            aria-label="Theme Switcher Button"
            className="theme-toggle flex flex-jc-sb flex-ai-c"
            onClick={toggleTheme}>
            <i className={`fa-regular ${isDarkTheme ? "fa-sun" : "fa-moon"} theme-icon`}></i>
            <span className="theme-text">{isDarkTheme ? "Light Mode" : "Dark Mode"}</span>
        </button>
    );
};
export default ThemeToggle;