import { useState } from "react";
import datajson from "../assets/CountriesData.json";
import "../assets/css/common.css";
import "../assets/css/main.css";
import Navbar from "../components/ui-elements/Navbar";
import DropDownFilter from "../components/filters/DropDownFilter";
import InputFilter from "../components/filters/InputFilter";
import Card from "../components/ui-elements/Card";

const Home = () => {
  const [countries, setCountries] = useState(datajson);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("All");

  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    const filteredCountries = datajson.filter((country) =>
      country.name.toLowerCase().includes(searchValue)
    );
    setCountries(filteredCountries);
  };

  const showFilterByRegion = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const filterByRegion = (region) => {
    setSelectedRegion(region);

    const filteredCountries = datajson.filter(
      (country) => region === "All" || country.region === region
    );
    setCountries(filteredCountries);
  };

  return (
    <>
      <Navbar />
      <section className="filters">
        <div className="container">
          <InputFilter onChange={handleSearch} />
          <DropDownFilter
            onClick={showFilterByRegion}
            isOpen={isDropdownOpen}
            filterByRegion={filterByRegion}
            region={selectedRegion}
          />
        </div>
      </section>
      <main className="main">
        <div className="container">
          <section>
            <div className="countries-grid" id="countries-list">
              {countries.map((country, index) => (
                <Card key={index} country={country} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;
