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
    const [isOpen, setIsOpen] = useState(false);


    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }

    const regions = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];


    return (
        <div className={`dropdown-wrapper ${isOpen && "open"}`}>
            <div className="dropdown-header flex flex-jc-sb flex-ai-c" onClick={toggleDropdown}>
                <span>Filter by Region</span>
                <i className="fa-solid fa-chevron-down icon"></i>
            </div>
            <div className="dropdown-body">
                <ul onClick={action}>
                    {regions.map((region) => (
                        <li key={region} data-region={region}>{region}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default RegionFilter;