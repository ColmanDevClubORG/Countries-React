
import React, { useState, useEffect } from "react";
import Country from "../components/Country";
import Modal from "../components/Modal";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        const filteredData = data.map((country) => ({
          name: country.name.common,
          flag: country.flags.png,
          population: country.population,
          region: country.region,
          capital: country.capital ? country.capital[0] : "N/A",
          additionalInfo: {
            subregion: country.subregion,
            languages: country.languages ? Object.values(country.languages).join(", ") : "N/A",
            borders: country.borders ? country.borders.join(", ") : "None",
          },
        }));
        setCountries(filteredData);
      } catch (error) {
        console.error("Failed to fetch countries:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCountries();
  }, []);

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };

  const closeModal = () => {
    setSelectedCountry(null);
  };

  return (
    <>
      <button
        type="button"
        aria-label="Scroll Top Button"
        className="button scroll-top flex flex-ai-c flex-jc-c scale-effect"
      >
        <i className="fa-regular fa-chevron-up icon"></i>
      </button>
  
      <header className="header">
        <div className="container flex flex-jc-sb flex-ai-c">
          <div className="logo">
            <a href="index.html">
              <h1 className="headerh1">Where in the world?</h1>
            </a>
          </div>
          <button
            type="button"
            aria-label="Theme Switcher Button"
            className="theme-toggle flex flex-jc-sb flex-ai-c"
          >
            <span className="darkIcon">
              <i className="fa-regular fa-moon theme-icon" id="darkButton"></i>
            </span>
            <span className="theme-text" id="darkText">
              Dark Mode
            </span>
          </button>
        </div>
      </header>
  
      <div className="body-container">
        <section className="filters">
          <div className="container">
            <div className="search-wrapper">
              <i className="fa-regular fa-magnifying-glass search-icon"></i>
              <input
                type="text"
                className="search-input"
                placeholder="Search for a country..."
              />
            </div>
  
            <div className="dropdown-wrapper">
              <div className="dropdown-header flex flex-jc-sb flex-ai-c">
                <span>Filter by Region</span>
                <i className="fa-regular fa-chevron-down icon"></i>
              </div>
              <div className="dropdown-body">
                <ul>
                  <li data-region="all">All</li>
                  <li data-region="africa">Africa</li>
                  <li data-region="america">Americas</li>
                  <li data-region="asia">Asia</li>
                  <li data-region="europe">Europe</li>
                  <li data-region="oceania">Oceania</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
  
        <main className="main">
          <div className="container">
            <section className="countries-grid">
              {isLoading ? (
                <div>Loading...</div>
              ) : (
                countries.map((country) => (
                  <Country
                    key={country.name}
                    {...country}
                    onClick={() => handleCountryClick(country)}
                  />
                ))
              )}
            </section>
          </div>
        </main>
        {selectedCountry && (
          <Modal country={selectedCountry} onClose={closeModal} />
        )}
      </div>
    </>
  );
 } 

export default Home;


