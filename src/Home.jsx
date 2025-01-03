
import { useState, useEffect } from "react";
import Modal from "./components/Modal.jsx";
import Country from "./components/Country.jsx";
import Header from "./components/Header.jsx";
import RegionFilter from "./components/RegionFilter.jsx";
import SearchBox from "./components/SearchBox.jsx";

const Home = ({ theme, toggleTheme }) => {
    const [countries, setCountries] = useState([]);
    const [allCountries, setAllCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then((response) => {
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                return response.json();
            })
            .then((data) => handleDataSuccess(data))
            .catch((err) => handleDataError(err.message));
    }, []);

    const handleDataSuccess = (data) => {
        setCountries(data);
        setAllCountries(data);
        setLoading(false);
    };

    const handleDataError = (message) => {
        console.error("Error fetching countries:", message);
        setError("Failed to load countries. Please try again later.");
        setLoading(false);
    };

    const showModal = (country) => {
        setSelectedCountry(country);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedCountry(null);
    };

    const handleSearch = (query) => {
        const lowerCaseQuery = query.toLowerCase();
        if (lowerCaseQuery === "") {
            setCountries(allCountries);
        } else {
            setCountries(allCountries.filter(country =>
                country.name.common.toLowerCase().startsWith(lowerCaseQuery)
            ));
        }
    };

    const handleRegionFilter = (region) => {
        if (region === "All") {
            setCountries(allCountries);
        } else {
            setCountries(allCountries.filter(country => country.region === region));
        }
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <>
            <Header theme={theme} toggleTheme={toggleTheme} />
            <section className="filters">
                <div className="container">
                    {countries.length === 1 && (
                        <button className="button-all-countries" onClick={() => setCountries(allCountries)}>
                            Show All Countries
                        </button>
                    )}
                    <SearchBox action={handleSearch} />
                    <RegionFilter action={handleRegionFilter} />
                </div>
            </section>
            <div className="countries-grid">
                {countries.map((country) => (
                    <div key={country.cca3} className="country" onClick={() => showModal(country)}>
                        <Country country={country} />
                    </div>
                ))}
            </div>
            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                country={selectedCountry}
            />
        </>
    );
};

export default Home;
