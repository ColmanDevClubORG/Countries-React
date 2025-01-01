import React, { useState } from "react";
import { REGIONS } from "../constants/regions.js";

export const Dropdown = ({onFilter}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleFilter = (region) => {
        onFilter(region);
        setIsOpen(false);
    };

    return (
        <div className={`dropdown-wrapper ${isOpen && "open"}`}>
            <div
                className="dropdown-header flex flex-jc-sb flex-ai-c"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>Filter by Region</span>
                <i className="fa-regular fa-chevron-down icon"></i>
            </div>
            {isOpen && (
                <div className="dropdown-body">
                    <ul>
                        {REGIONS.map((region) => (
                            <li key={region} onClick={() => handleFilter(region.toLowerCase())}>
                                {region}
                            </li>
                        ))}
                        {/* {["All", "Africa", "Americas", "Asia", "Europe", "Oceania"].map(
                            (region) => (
                                <li key={region} onClick={() => handleFilter(region.toLowerCase())}>
                                    {region}
                                </li>
                            )
                        )} */}
                    </ul>
                </div>
            )}
        </div>
    );
};