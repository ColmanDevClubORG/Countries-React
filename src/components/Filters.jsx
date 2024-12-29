import React from "react";

export const Filters = () => {
    return (
       
            <div className="container">
                <div className="search-wrapper">
                    <i className="fa-regular fa-magnifying-glass search-icon"></i>
                    <input type="text" className="search-input" placeholder="Search for a country..." />
                </div>
                <div className="dropdown-wrapper">
                    <div className="dropdown-header flex flex-jc-sb flex-ai-c">
                        <span>Filter by Region</span>
                        <i className="fa-regular fa-chevron-down icon"></i>
                    </div>
                    <div className="dropdown-body">
                        <ul>
                            <li data-region="all">All</li>
                            <li data-region="africa">Africa</li>
                            <li data-region="america">America</li>
                            <li data-region="asia">Asia</li>
                            <li data-region="europe">Europe</li>
                            <li data-region="oceania">Oceania</li>
                        </ul>
                    </div>
                </div>
            </div>
    )
}