import React from 'react'
import { useState } from 'react';

const Filters = (props) => {
    const regions = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];
    const [isOpen, setIsOpen] = useState(false);

    const openDropDown = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
        <section class="filters">
        <div class="container">
          <div class="search-wrapper">
            <i class="fa-regular fa-magnifying-glass search-icon"></i>
            <input
              type="text"
              class="search-input"
              placeholder="Search for a country..."
              id="country-filter"
            />
          </div>
          <div class="dropdown-wrapper" id="dropdown-wrapper">
            <div class="dropdown-header flex flex-jc-sb flex-ai-c" id="dropdown-header">
              <span>Filter by Region</span>
              <i class="fa-regular fa-chevron-down icon"></i>
            </div>
            <div class="dropdown-body">
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
        </div>
      </section>)
        
        
        
        
        </>
    )
