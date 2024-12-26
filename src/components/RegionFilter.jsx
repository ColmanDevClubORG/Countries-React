import 'react';
import {useState} from "react";

/**
 * RegionFilter Component
 * Displays a dropdown menu for filtering by region.
 *
 * Props:
 * - action: Function to handle the selection of a region.
 *
 * Functionality:
 * - Toggles the dropdown menu open and closed.
 * - Calls the provided `action` function when a region is clicked.
 */
const RegionFilter = ({action}) => {
    //this State tracks whether the dropdown menu is open (true) or closed (false).
    const [isOpen, setIsOpen] = useState(false);

    /**
     * toggleDropdown Function
     * Toggles the state of `isOpen` to open or close the dropdown menu.
     */
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