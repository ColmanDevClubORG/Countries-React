import React from "react";
import { useState } from "react";
import "../assets/css/common.css"
import countryData from "../assets/CountriesData.json";
import Country from "../components/Country"

const Home = () => {
    const [search, setSearch] = useState('');
    const filteredCountries = countryData.filter((country) => country.name.toLowerCase().includes(search.toLowerCase()));

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
                        <input type="text" className="search-input" placeholder="Search for a country..."
                            onChange={(e) => setSearch(e.target.value)} />
                    </div>
                    <div class="dropdown-wrapper">
                        <div class="dropdown-header flex flex-jc-sb flex-ai-c">
                            <span>Filter by Region</span>
                            <i class="fa-regular fa-chevron-down icon"></i>
                        </div>
                    </div>
                </div>
            </section>
            <main class="main">
                <div class="container">
                    <section class="countries-grid">
                        {filteredCountries.map((country, index) => (<Country key={index} country={country} />))}
                    </section>
                </div>
            </main>
        </div>

    );
};
export default Home;