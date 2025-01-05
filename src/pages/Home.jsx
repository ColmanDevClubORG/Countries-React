import React, { useState, useEffect } from "react";
import { Country } from "../components/Country";
import '../pages/App.css'

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [allCountries, setAllCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        const formattedData = data.map((country) => ({
          name: country.name.common,
          population: country.population,
          region: country.region,
          capital: country.capital ? country.capital[0] : "N/A",
          flag: country.flags.png,
        }));
        setCountries(formattedData);
        setAllCountries(formattedData);
      } catch (error) {
        console.error("Error fetching countries data:", error);
      }
    };
    fetchCountries();
  }, []);

  const onSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    const filteredData = allCountries.filter((country) =>
      country.name.toLowerCase().includes(searchValue)
    );
    setCountries(filteredData);
  };

  const openModal = (country) => {
    setSelectedCountry(country);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCountry(null);  
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by country name..."
        onChange={onSearch}
      />
      <div className="countries-grid">
        {countries.map((country) => (
          <Country
            key={country.name}
            population={country.population}
            region={country.region}
            name={country.name}
            flag={country.flag}
            capital={country.capital}
            onClick={() => openModal(country)}
          />
        ))}
      </div>

      {isModalOpen && selectedCountry && (
        <div className="modal">
          <div className="modal-content">
            <button onClick={closeModal}>Close</button>
            <h2>{selectedCountry.name}</h2>
            <p>Population: {selectedCountry.population}</p>
            <p>Region: {selectedCountry.region}</p>
            <p>Capital: {selectedCountry.capital}</p>
            <img src={selectedCountry.flag} alt={selectedCountry.name} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
