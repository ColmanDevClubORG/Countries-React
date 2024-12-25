import 'react'
import Logo from "./Logo.jsx";
import ThemeToggle from "./ThemeToggle.jsx";

const Header = ({ theme, toggleTheme }) => {
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
