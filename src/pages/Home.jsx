import React, { useState, useEffect } from "react";
import "../assets/css/common.css";
import axios from "axios";
import Country from "../components/Country";
import Modal from "../components/Modal";

const Home = () => {
    const [search, setSearch] = useState('');
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        // Fetch data from API
        const fetchCountries = async () => {
            try {
                const response = await axios.get("https://restcountries.com/v3.1/all");
                console.log("Response data:", response.data); // Debugging API response
                const formattedData = response.data.map((country) => ({
                    name: country.name.common,
                    flag: country.flags.png,
                    population: country.population,
                    region: country.region,
                    capital: country.capital ? country.capital[0] : "N/A",
                    subregion: country.subregion,
                    languages: country.languages ? Object.values(country.languages).join(", ") : "N/A",
                    currencies: country.currencies ? Object.values(country.currencies).map(c => c.name).join(", ") : "N/A",
                }));
                setCountries(formattedData);
                setFilteredCountries(formattedData);
                console.log("Formatted data:", formattedData); // Debugging formatted data
            } catch (error) {
                console.error("Error fetching countries data:", error);
            }
        };

        fetchCountries();
    }, []);

    useEffect(() => {
        // Filter countries based on search input
        const filtered = countries.filter((country) =>
            country.name.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredCountries(filtered);
        console.log("Filtered countries:", filtered); // Debugging filtered data
    }, [search, countries]);

    const handleCountryClick = (country) => {
        setSelectedCountry(country);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedCountry(null);
    };

    return (
        <div>
            <button type="button" aria-label="Scroll Top Button" className="button scroll-top flex flex-ai-c flex-jc-c scale-effect">
                <i className="fa-regular fa-chevron-up icon"></i>
            </button>
            <header className="header">
                <div className="container flex flex-jc-sb flex-ai-c">
                    <div className="logo">
                        <h1>Where in the world?</h1>
                    </div>
                    <button type="button" aria-label="Theme Switcher Button" className="theme-toggle flex flex-jc-sb flex-ai-c">
                        <i className="fa-regular fa-moon theme-icon"></i>
                        <span className="theme-text">Dark Mode</span>
                    </button>
                </div>
            </header>

            <section className="filters">
                <div className="container">
                    <div className="search-wrapper">
                        <i className="fa-regular fa-magnifying-glass search-icon"></i>
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Search for a country..."
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                </div>
            </section>
            <main className="main">
                <div className="container">
                    <section className="countries-grid">
                        {filteredCountries.map((country, index) => (
                            <div key={index} onClick={() => handleCountryClick(country)}>
                                <Country country={country} />
                            </div>
                        ))}
                    </section>
                </div>
            </main>
            {isModalOpen && selectedCountry && (
                <Modal onClose={closeModal}>
                    <div className="modal-content">
                        <h2>{selectedCountry.name}</h2>
                        <img src={selectedCountry.flag} alt={`${selectedCountry.name} flag`} className="modal-flag" />
                        <p><strong>Population:</strong> {selectedCountry.population}</p>
                        <p><strong>Region:</strong> {selectedCountry.region}</p>
                        <p><strong>Subregion:</strong> {selectedCountry.subregion}</p>
                        <p><strong>Capital:</strong> {selectedCountry.capital}</p>
                        <p><strong>Languages:</strong> {selectedCountry.languages}</p>
                        <p><strong>Currencies:</strong> {selectedCountry.currencies}</p>
                    </div>
                </Modal>
            )}
        </div>
    );
};

export default Home;
