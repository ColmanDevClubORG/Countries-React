import {useState} from "react";
import Country from "./components/Country.jsx";
import Header from "./components/Header.jsx";
import RegionFilter from "./components/RegionFilter.jsx";
import SearchBox from "./components/SearchBox.jsx";
import countriesData from './assets/json/CountriesData.json';

/**
 * Home Component
 * Manages the main layout, filtering, and display of countries.
 *
 * Props:
 * - theme: Current theme ("light" or "dark").
 * - toggleTheme: Function to toggle the theme.
 *
 * Functionality:
 * - Displays a list of countries with search and region filtering.
 * - Allows toggling between light and dark themes.
 */
const Home = ({theme, toggleTheme}) => {
    const [countries, setCountries] = useState(countriesData);

    /**
     * Filters the countries list to display details of a single country by name.
     */
    const showOneCountryDetails = (countryName) => {
        setCountries(countriesData.filter((country) => country.name === countryName));
    };

    /**
     * Resets the countries list to show all available countries.
     */
    const showAllCountries = () => {
        setCountries(countriesData);
    };

    /**
     * Filters the countries list based on a search query from the input field.
     */
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

    /**
     * Filters the countries list based on the selected region.
     */
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