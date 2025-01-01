import React from "react";
// import datajson from "../assets/CountriesData.json"
import { Header } from "../components/Header"
import { Filters } from "../components/Filters";
import { CountriesGrid } from "../components/CountriesGrid";
import { useState, useEffect } from "react";


const Home = () => {

    const [originalData, setOriginalData] = useState([]);
    const [filteredCards, setFilteredCards] = useState([]);

    useEffect(() => {
        const fetchData = async () =>{
            try {
                const response = await fetch('https://restcountries.com/v3.1/all')
                const data = await response.json();
                console.log(data);
                const processedData = data.map((country) => ({
                    name: country.name.common,
                    population: country.population,
                    flag: country.flags.png,
                    region: country.region, 
                    capital: country.capital
                }));
                setOriginalData (processedData);
                setFilteredCards(processedData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();
    },[])

    const handleSearch = (searchValue) => {
        const filtered = originalData.filter((card) => {
            const values = Object.values(card)
            .filter(value=>value!= undefined && value!= null)
            .map(value => value.toString().toLowerCase());
            return values.some(value => value.includes(searchValue.toLowerCase()));
        });
        setFilteredCards(filtered);
    };


    const handleFilter = (region) => {
        if (region === "all") {
            setFilteredCards(originalData); 
        } else {
            const filtered = originalData.filter(
                (card) => card.region.toLowerCase() === region
            );
            setFilteredCards(filtered);
        }
    };

    return (
        <div>
            <Header />
            <Filters onSearch={handleSearch} onFilter={handleFilter} />
            <div className="main">
                <div className="container">
                    <CountriesGrid countries={filteredCards} />
                </div>
            </div>
        </div>

    );
};


export default Home;
