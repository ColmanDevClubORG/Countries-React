import {useState} from "react"

const Filter = ({ search }) => {
  const [ displayDropdown, setDisplayDropdown ] = useState(false);

  const searchValue = (e) => {
    search(e.target.value); 
  };

  const regionValue = (region) => {
    search(region);
    setDisplayDropdown(false);
  }

  const dropdowntoggle = () => {
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
            onChange={searchValue}
          />
        </div>
        <div className={`dropdown-wrapper ${displayDropdown ? "open" : ""}`}>
          <div
            className="dropdown-header flex flex-jc-sb flex-ai-c"
            onClick={dropdowntoggle}
          >
            <span>Filter by Region</span>
            <i className="fa-regular fa-chevron-down icon"></i>
          </div>
          <div className="dropdown-body">
            <ul>
            <li onClick={() => regionValue("all")} data-region="all">All</li>
              <li onClick={() => regionValue("africa")}data-region="africa">Africa</li>
              <li onClick={() => regionValue("americas")}data-region="americas">America</li>
              <li onClick={() => regionValue("asia")} data-region="asia">Asia</li>
              <li onClick={() => regionValue("europe")}  data-region="europe">Europe</li>
              <li onClick={() => regionValue("oceania")}data-region="oceania">Oceania</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Filter;