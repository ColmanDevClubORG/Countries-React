import 'react';
import {useState} from "react";

const RegionFilter = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className={`dropdown-wrapper ${isOpen ? "open" : ""}`}>
            <div className="dropdown-header flex flex-jc-sb flex-ai-c" onClick={toggleDropdown}>
                <span>Filter by Region</span>
                <i className="fa-solid fa-chevron-down icon"></i>
            </div>
            <div className="dropdown-body">
                <ul>
                    <li data-region="all">All</li>
                    <li data-region="africa">Africa</li>
                    <li data-region="americas">America</li>
                    <li data-region="asia">Asia</li>
                    <li data-region="europe">Europe</li>
                    <li data-region="oceania">Oceania</li>
                </ul>
            </div>
        </div>
    );
};

export default RegionFilter;