import React from 'react'
import { useState } from 'react';

const SearchBar = (props) => {
    const regions = ["All", "Africa", "America", "Asia", "Europe", "Oceania"];
    const [isOpen, setIsOpen] = useState(false);

    // if the menu is open
    const openDropDown = () => {
        setIsOpen(!isOpen);
    }
    const filterByRegionFunc = (region) => {
        if (props.filterByRegionFunc) {
            props.filterByRegionFunc(region);
        }
    };

    return (<>
        <section className="filters">
            <div className="container">
                <div className="search-wrapper">
                    <i className="fa-regular fa-magnifying-glass search-icon"></i>
                    <input type="text" className="search-input" placeholder="Search for a country..." onInput={()=>props.filterBySearchFunc(event)}/>
                </div>
                <div className={`dropdown-wrapper ${isOpen ? "open" : ""}`}>
                    <div className="dropdown-header flex flex-jc-sb flex-ai-c" onClick={openDropDown}>
                        <span>Filter by Region</span>
                        <i className="fa-regular fa-chevron-down icon"></i>
                    </div>
                    {isOpen && (
                        <div className="dropdown-body">
                            <ul>
                                {regions.map((region, index) => (
                                    <li key={index} data-region={region} onClick={()=>props.filterByRegionFunc(region)}>{region}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </section >

    </>)

}
   export default SearchBar;