import {useState} from "react";
import Country from "./components/Country.jsx";
import Header from "./components/Header.jsx";
import RegionFilter from "./components/RegionFilter.jsx";
import SearchBox from "./components/SearchBox.jsx";
import countriesData from './assets/json/CountriesData.json';

const Home = ({theme, toggleTheme}) => {
    const [countries, setCountries] = useState(countriesData);

    const showOneCountryDetails = (countryName) => {
        setCountries(countriesData.filter((country) => country.name === countryName));
    };

    const showAllCountries = () => {
        setCountries(countriesData);
    };

    const searchByInput = (e) => {
        const query = e.target.value.toLowerCase();
        if (query === "") {
            setCountries(countriesData);
        } else {
            setCountries(countriesData.filter((country) =>
                country.name.toLowerCase().startsWith(query)
            ));
        }
    };

    const searchByRegion = (e) => {
        const region = e.target.getAttribute("data-region");
        if (region === 'All') {
            showAllCountries();
        } else {
            setCountries(countriesData.filter((country) => country.region === region));
        }
    }

    return (
        <>
            <Header theme={theme} toggleTheme={toggleTheme}/>
            <section className="filters">
                <div className="container">
                    {countries.length === 1 && (
                        <button className="button-all-countries" onClick={showAllCountries}>
                            Show All Countries
                        </button>
                    )}
                    <SearchBox action={searchByInput}/>
                    <RegionFilter action={searchByRegion}/>
                </div>
            </section>
            <div className="countries-grid">
                {countries.map((country) => (
                    <a
                        key={country.name}
                        className="country"
                        onClick={() => {
                            showOneCountryDetails(country.name);
                        }}>
                        <Country country={country}/>
                    </a>
                ))}
            </div>
        </>
    );
};

export default Home;