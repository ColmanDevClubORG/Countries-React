import { useState } from "react"

const Filter = ({ onSearch }) => {
  const regions = ["all", "africa", "americas", "asia", "europe", "oceania"];
  const [displayDropdown, setDisplayDropdown] = useState(false);

  const regionValue = (region) => {
    onSearch(region);
    setDisplayDropdown(false);
  }

  const toggleDropdown = () => {
    setDisplayDropdown(!displayDropdown);
  };

  return (
    <section className="filters">
      <div className="container">
        <div className="search-wrapper">
          <i className="fa-regular fa-magnifying-glass search-icon"></i>
          <input
            type="text"
            className="search-input"
            placeholder="Search for a country..."
            onChange={(e) => { onSearch(e.target.value) }}
          />
        </div>
        <div className={`dropdown-wrapper ${displayDropdown ? "open" : ""}`}>
          <div
            className="dropdown-header flex flex-jc-sb flex-ai-c"
            onClick={toggleDropdown}
          >
            <span>Filter by Region</span>
            <i className="fa-regular fa-chevron-down icon"></i>
          </div>
          <div className="dropdown-body">
            <ul>
              {regions.map((region) => (
                <li
                  key={region}
                  onClick={() => regionValue(region)}
                  data-region={region}
                >
                  {region}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Filter;