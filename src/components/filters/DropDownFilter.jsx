import UnOrderedList from "../ui-elements/UnOrderedList";

const DropDownFilter = (props) => {
  const { isOpen, onClick, filterByRegion, region } = props;
  const handleRegionClick = (region) => {
    filterByRegion(region);
    onClick();
  };

  return (
    <div className={`dropdown-wrapper ${isOpen ? "open" : ""}`}>
      <div
        className="dropdown-header flex flex-jc-sb flex-ai-c"
        onClick={onClick}
      >
        <span id="region-filter">
          {region === "All" ? "Filter by Region" : region}
        </span>
        <i className="fa-regular fa-chevron-down icon"></i>
      </div>
      <div className="dropdown-body">
        <UnOrderedList id="list-by-region">
          <li onClick={() => handleRegionClick("All")} data-region="all">
            All
          </li>
          <li onClick={() => handleRegionClick("Africa")} data-region="africa">
            Africa
          </li>
          <li
            onClick={() => handleRegionClick("Americas")}
            data-region="americas"
          >
            America
          </li>
          <li onClick={() => handleRegionClick("Asia")} data-region="asia">
            Asia
          </li>
          <li onClick={() => handleRegionClick("Europe")} data-region="europe">
            Europe
          </li>
          <li
            onClick={() => handleRegionClick("Oceania")}
            data-region="oceania"
          >
            Oceania
          </li>
        </UnOrderedList>
      </div>
    </div>
  );
};

export default DropDownFilter;
