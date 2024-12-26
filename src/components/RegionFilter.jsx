import 'react';
import {useState} from "react";

const RegionFilter = ({action}) => {
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
                <ul onClick={action}>
                    <li data-region="All">All</li>
                    <li data-region="Africa">Africa</li>
                    <li data-region="Americas">America</li>
                    <li data-region="Asia">Asia</li>
                    <li data-region="Europe">Europe</li>
                    <li data-region="Oceania">Oceania</li>
                </ul>
            </div>
        </div>
    );
};

export default RegionFilter;