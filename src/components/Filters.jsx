/* eslint-disable react/prop-types */
import { useState } from "react";

function Filters({
  onRegionChanged,
  onSearchTextChanged,
  searchText,
  selectedRegion,
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <section className="filters">
      <div className="container">
        {/* Search Input */}
        <div className="search-wrapper">
          <i className="fa-regular fa-magnifying-glass search-icon"></i>
          <input
            type="text"
            className="search-input"
            placeholder="Search for a country..."
            value={searchText}
            onChange={onSearchTextChanged}
          />
        </div>

        {/* Dropdown */}
        <div
          className={`dropdown-wrapper ${dropdownOpen ? "open" : ""}`}
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <div className="dropdown-header flex flex-jc-sb flex-ai-c">
            <span>
              {selectedRegion === "all" ? "Filter by Region" : selectedRegion}
            </span>
            <i className="fa-regular fa-chevron-down icon"></i>
          </div>

          {dropdownOpen && (
            <div className="dropdown-body">
              <ul>
                <ul>
                  <li data-region="all" onClick={onRegionChanged}>
                    All
                  </li>
                  <li data-region="africa" onClick={onRegionChanged}>
                    Africa
                  </li>
                  <li data-region="americas" onClick={onRegionChanged}>
                    America
                  </li>
                  <li data-region="asia" onClick={onRegionChanged}>
                    Asia
                  </li>
                  <li data-region="europe" onClick={onRegionChanged}>
                    Europe
                  </li>
                  <li data-region="oceania" onClick={onRegionChanged}>
                    Oceania
                  </li>
                </ul>
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Filters;
