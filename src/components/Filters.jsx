/* eslint-disable react/prop-types */
import { useState } from "react";

function Filters({
  onRegionChanged,
  onSearchTextChanged,
  searchText,
  selectedRegion,
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const regions = [
    { label: "All", value: "all" },
    { label: "Africa", value: "africa" },
    { label: "America", value: "americas" },
    { label: "Asia", value: "asia" },
    { label: "Europe", value: "europe" },
    { label: "Oceania", value: "oceania" },
  ];

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
                {regions.map((region) => (
                  <li
                    key={region.value}
                    data-region={region.value}
                    onClick={onRegionChanged}
                  >
                    {region.label}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Filters;
