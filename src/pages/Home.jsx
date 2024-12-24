import React, {useState, useEffect} from "react";
import Country from "../components/Country";
import Header from "../components/Header.jsx";
import RegionFilter from "../components/RegionFilter.jsx";
import SearchBox from "../components/SearchBox.jsx";

const Home = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        // לדוגמה, טוען נתונים מ-API או מקובץ
        fetch("src/assets/CountriesData.json")
            .then((response) => response.json())
            .then((data) => setCountries(data))
            .catch((error) => console.error("Error fetching countries:", error));
    }, []);

    return (
        <>
            <Header  />
            <section className="filters">
                <div className="container">
                    <SearchBox/>
                    <RegionFilter/>
                </div>
            </section>
            <div className="countries-grid">
                {countries.map((country) => (
                    <Country key={country.name} country={country}/>
                ))}
            </div>
        </>
    );
};

export default Home;