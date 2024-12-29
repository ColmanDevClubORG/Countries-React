import React, { useState } from 'react';

const Filters = ({ handleRegionChange }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState('All');

  const toggleDropdown = () => {
    setIsDropdownOpen(prevState => !prevState);
  };

  // Handle region selection
  
  const handleRegionSelect = (region) => {
    setSelectedRegion(region.toLowerCase()); // Update the selected region
    handleRegionChange(region.toLowerCase()); // Pass the selected region to the parent component
    setIsDropdownOpen(false); // Close the dropdown when a region is selected
  };

  return (
    <section className="filters">
      <div className="container">
      <div className="search-wrapper">
          <i className="fa-regular fa-magnifying-glass search-icon"></i>
          <input onChange={(e) => handleRegionChange(e.target.value)}
            id="input"
            type="text"
            className="search-input"
            placeholder="Search for a country..."
          />
        </div>
        <div
          className={`dropdown-wrapper ${isDropdownOpen ? 'open' : ''}`}
          onClick={toggleDropdown}
        >
          <div className="dropdown-header flex flex-jc-sb flex-ai-c">
            <span>Filter by Region</span>
          </div>
          <div className={`dropdown-body ${isDropdownOpen ? 'open' : ''}`}>
            <ul>
              <li onClick={() => handleRegionSelect('All')}>All</li>
              <li onClick={() => handleRegionSelect('Africa')}>Africa</li>
              <li onClick={() => handleRegionSelect('Americas')}>America</li>
              <li onClick={() => handleRegionSelect('Asia')}>Asia</li>
              <li onClick={() => handleRegionSelect('Europe')}>Europe</li>
              <li onClick={() => handleRegionSelect('Oceania')}>Oceania</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Filters;
