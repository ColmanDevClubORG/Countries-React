
import { useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export function Scroll() {
    return(
        <button
            type="button"
            aria-label="Scroll Top Button"
            className="button scroll-top flex flex-ai-c flex-jc-c scale-effect"
        >
            <i className="fa-regular fa-chevron-up icon"></i>
        </button>
    );
}

export function Header() {

    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle("dark-mode", !isDarkMode);

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
  }


  // eslint-disable-next-line react/prop-types
  export function Dropdown({onRegionSelect}) {
    
const[isDropdownOpen, setIsDropdownOpen] = useState(false);

const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
};

const handleRegionSelect = (region) => {
    onRegionSelect(region);
    setIsDropdownOpen(false); 
};


    return (     
  <div className={`dropdown-wrapper ${isDropdownOpen ? "open" : ""}`}>
    <div className="dropdown-header flex flex-jc-sb flex-ai-c"
        onClick={toggleDropdown}>

        <span>Filter by Region</span>
        <i className="fa-regular fa-chevron-down icon"></i>
        </div>
        {isDropdownOpen && (  
                <div className="dropdown-body" >
                    <ul>
                        <li onClick={() => handleRegionSelect("all")}>All</li>
                        <li onClick={() => handleRegionSelect("africa")}>Africa</li>
                        <li onClick={() => handleRegionSelect("americas")}>America</li>
                        <li onClick={() => handleRegionSelect("asia")}>Asia</li>
                        <li onClick={() => handleRegionSelect("europe")}>Europe</li>
                        <li onClick={() => handleRegionSelect("oceania")}>Oceania</li>
                    </ul>
                </div>
            )}
    </div>
  
    );
}