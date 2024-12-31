import { useState, useEffect } from 'react';
import axios from 'axios';

let countriesData = [];

function useFetchCountries(selectedRegion, searchValue) {
  const [countries, setCountries] = useState([]);
  const fetchData = async () => {
    const { data } = await axios('https://restcountries.com/v3.1/all');
    setCountries(data);
    countriesData = data;
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    let newCountries = {};
    if (selectedRegion === 'All') newCountries = countriesData;
    else {
      newCountries = countriesData.filter(
        (country) =>
          selectedRegion.toLowerCase() === country.region?.toLowerCase(),
      );
    }

    newCountries = newCountries.filter((country) =>
      country.name?.common?.toLowerCase().includes(searchValue.toLowerCase()),
    );

    setCountries(newCountries);
  }, [selectedRegion, searchValue]);

  return { countries };
}

export default useFetchCountries;
