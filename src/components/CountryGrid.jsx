import React, { useState, useEffect } from "react";
import countriesData from "../assets/CountriesData.json";
import { Link } from "react-router-dom";
import CountryCard from "./Country";

const CountryGrid = ({ selectedRegion }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setCountries(countriesData);
  }, []);

  // Filter countries based on selected region
  const filteredCountries =
    selectedRegion === "all"
      ? countries
      : countries.filter(
          (country) => country.region.toLowerCase() === selectedRegion
        );

        const finalFilteredCountries = filteredCountries.length === 0
          ? countries.filter((country) => country.name.toLowerCase().includes(selectedRegion))
          : filteredCountries;

  return (
    <div className="container">
      <section className="countries-grid">
        {finalFilteredCountries.map((country) => (
          <Link to={`/details/${country.name}`} key={country.name}>
            <CountryCard country={country} />
          </Link>
        ))}
      </section>
    </div>
  );
};

export default CountryGrid;
