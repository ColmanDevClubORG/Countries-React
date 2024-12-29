import React from "react";


export const Country = ({ country }) => {
    return (
        <div className="country-card">
            <img src={country.flag} alt={country.name} />
            <h2 className="country-name">{country.name}</h2>
            <p>Population: {country.population}</p>
            <p>Region: {country.region}</p>
            <p>Capital: {country.capital}</p>
        </div>
    );
};
