import 'react'
import Logo from "./Logo.jsx";
import ThemeToggle from "./ThemeToggle.jsx";


/**
 * Header Component
 * Displays the header with a logo and a theme toggle button.
 *
 * Props:
 * - theme: Current theme ("light" or "dark").
 * - toggleTheme: Function to toggle between themes.
 */
const Header = ({theme, toggleTheme}) => {

    return (
        <header className="header">
            <div className="container flex flex-jc-sb flex-ai-c">
                <Logo/>
                <ThemeToggle theme={theme} toggleTheme={toggleTheme}/>
            </div>
        </header>
    )
}

export default Header
