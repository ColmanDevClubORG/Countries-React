import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Import useParams to get URL params
import countriesData from "../assets/CountriesData.json"; // Import country data

const CountryDetails = () => {
  const { countryName } = useParams(); // Get country name from URL parameter
  const [country, setCountry] = useState(null);

  // Fetch the country data based on countryName when the component mounts or countryName changes
  useEffect(() => {
    const foundCountry = countriesData.find(
      (c) => c.name.toLowerCase() === countryName.toLowerCase()
    );
    setCountry(foundCountry);
  }, [countryName]); // Dependency array ensures it runs when countryName changes

  if (!country) {
    return <div>Loading...</div>; // Loading state while waiting for country data
  }

  return (
    <div className="country-details">
      <div className="img-side">
        <img className="country-flag" src={country.flag} alt={`${country.name} Flag`} />
      </div>
      <div className="country-info">
        <h1 id="name-title">{country.name}</h1>
        <div className="col-2">
          <ul>
            <li><strong>Native Name:</strong> {country.native_name}</li>
            <li><strong>Population:</strong> {country.population.toLocaleString()}</li>
            <li><strong>Region:</strong> {country.region}</li>
            <li><strong>Sub Region:</strong> {country.subregion}</li>
            <li><strong>Capital:</strong> {country.capital}</li>
          </ul>
          <ul>
            <li><strong>Top Level Domain:</strong> {country.top_level_domain}</li>
            <li><strong>Currencies:</strong> {country.currencies.join(', ')}</li>
            <li><strong>Languages:</strong> {country.languages.join(', ')}</li>
          </ul>
        </div>
        <div className="col-3">
          <ul>
            <li><strong>Border Countries:</strong></li>
            {country.border_countries && country.border_countries.length > 0 ? (
              country.border_countries.map((border, index) => (
                <li key={index}>
                  <button className="btn">{border}</button>
                </li>
              ))
            ) : (
              <li>No bordering countries</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
