import React from "react";
import { Country } from '../components/Country';
import CountriesData from '../assets/CountriesData.json';

const Home = () => {
    return (
        <div className="home-container">
            {CountriesData.map((country, index) => (
                <Country key={index} country={country} />
            ))}
        </div>
    );
};

export default Home;
