import {useState} from "react";
import Country from "./components/Country.jsx";
import Header from "./components/Header.jsx";
import RegionFilter from "./components/RegionFilter.jsx";
import SearchBox from "./components/SearchBox.jsx";
import countriesData from './assets/json/CountriesData.json';

const Home = () => {
    const [countries, setCountries] = useState(countriesData);


    const showOneCountryDetails = (countryName) => {
        setCountries(countriesData.filter((country) => country.name === countryName));
    };

    const showAllCountries = () => {
        setCountries(countriesData);
    };


    return (
        <>
            <Header/>
            <section className="filters">
                <div className="container">
                    {countries.length === 1 && (
                        <button className="button" onClick={showAllCountries}>
                            Show All Countries
                        </button>
                    )}
                    <SearchBox/>
                    <RegionFilter/>
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