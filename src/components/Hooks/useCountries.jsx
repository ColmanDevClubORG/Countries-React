import { useState, useEffect } from "react";
import axios from "axios";

const useCountries = () => {
    const [countriesData, setCountriesData] = useState([])
    const [filteredCountries, setfilteredCountries] = useState([]);

    useEffect(() => {
        const fetchCountriesData = async () => {
            try {
                const response = await axios.get('https://restcountries.com/v3.1/all');
                const countries = response.data.slice(0,100);
                setCountriesData(countries);
                setfilteredCountries(countries);
            }
            catch (error) {
                console.error(error.message);
            }
        }
        fetchCountriesData();
    }, []);

    const search = (userInput) => {
        const input = userInput.toLowerCase();
        if (input === "all") {
            setfilteredCountries(countriesData);
            return;
        }

        const filtered = countriesData.filter(({ name, region }) => {
            const countryName = name.common.toLowerCase();
            const countryRegion = region.toLowerCase();
            return countryName.includes(input) || countryRegion.includes(input)
        });

        setfilteredCountries(filtered);
    };

    return {countriesData, filteredCountries, search }
};

export default useCountries;