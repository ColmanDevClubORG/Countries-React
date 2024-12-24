import 'react'
import Logo from "./Logo.jsx";
import ThemeToggle from "./ThemeToggle.jsx";

const Header = () => {
    return (

        <header className="header">
            <div className="container flex flex-jc-sb flex-ai-c">
                <Logo/>
                <ThemeToggle/>
            </div>
        </header>
    )
}

export default Header
