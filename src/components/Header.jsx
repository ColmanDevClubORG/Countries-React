import { useState, useEffect } from "react";
import { HardCodedStrings } from "./constants";

const Header = () => {
    const [toggleDarkMode, setDispalayDarkMode] = useState(false);

    const handleDarkModeClick = () => {
        setDispalayDarkMode(!toggleDarkMode)
    }

    useEffect(() => {
        document.body.classList.toggle("dark-theme", toggleDarkMode);
    }, [toggleDarkMode]);

    return (
        <header className="header">
            <div className="container flex flex-jc-sb flex-ai-c">
                <div className="logo">
                    <a href="index.html">
                        <h1>{HardCodedStrings.logoText}</h1>
                    </a>
                </div>
                <button
                    type="button"
                    aria-label="Theme Switcher Button"
                    className="theme-toggle flex flex-jc-sb flex-ai-c"
                >
                    <i className="fa-regular fa-moon theme-icon"></i>
                    <span className="theme-text" onClick={handleDarkModeClick}>{HardCodedStrings.darkModeText}</span>
                </button>
            </div>
        </header>
    );
};

export default Header;