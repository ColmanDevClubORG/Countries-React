import React, { useState } from "react";
import { Country } from "../components/Country";
import Data from "../assets/CountriesData.json";

const Home = () => {
 
  const [countries, setCountries] = useState(Data);


  const onSearch = (e) => {
    const searchValue = e.target.value.toLowerCase(); 
    const filteredData = Data.filter((country) =>
      country.name.toLowerCase().includes(searchValue) 
    );
    console.log(filteredData);
    setCountries(filteredData); 
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by country name..."
        onChange={onSearch}
      />
      <div className="countries-grid">
        {countries.map((country) => (
          <Country
            key={country.name}
            population={country.population}
            region={country.region}
            name={country.name}
            flag={country.flag}
            capital={country.capital}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
