import React, { useEffect, useState } from "react";
import countriesData from '../assets/CountriesData.json'
import Country from '../components/Country'
import Filter from "../components/Filter"
const Home = (props) => {
    const [searchValue, setSearchValue] = useState("")
    const [selectedRegion, setSelectedRegion] = useState("All")
    const [countries, setCountries] = useState(countriesData)
    const [currentCountriesAfterRegion, setCurrentCountriesAfterRegion] = useState(countriesData)
    useEffect(() => {
        let data = {}
        if (selectedRegion != "All") {
            data = countriesData.filter((country) => country.region.toLowerCase() == selectedRegion.toLowerCase())
        }
        else data = countriesData
        setCurrentCountriesAfterRegion(data)
        setCountries(data)
    }, [selectedRegion])

    useEffect(() => {
        const data = currentCountriesAfterRegion.filter((country) => country.name.toLowerCase().includes(searchValue.toLowerCase()))
        setCountries(data)
    }, [searchValue])
    return (
        <>
            <Filter searchValue={searchValue} setSearchValue={setSearchValue} selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion} />
            <main className="main">
                <div className="container">
                    <section className="countries-grid">
                        {countries && countries.length > 0 ? (
                            countries.map((country) => (
                                <Country key={country.name} country={country} />
                            ))
                        ) : (<div className="not-found">No countries found</div>)}
                    </section>
                </div>
            </main>
        </>
    );
};

export default Home;

