import { useState } from "react";
import { Country } from "../components/Country";
import data from "../assets/CountriesData.json";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";

export const Home = () => {
  const [countries, setCountries] = useState(data);

  const filterByRegionFunc = (region) => {
    const filteredCountries =
      region === "All"
        ? data
        : data.filter((country) => country.region === region);
    setCountries(filteredCountries);
  };

  return (
    <>
      <Header />
      <SearchBar
        filterByRegionFunc={filterByRegionFunc}
      />
      <div className="main container">
        <div className="countries-grid">
          {countries.map((country) => (
            <Country key={country.name} {...country} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
