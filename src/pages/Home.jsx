import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Filters from "../components/Filters";
import CountryGrid from "../components/CountryGrid";


const Home = () => {
    const [selectedRegion, setSelectedRegion] = useState('all');
    const [DarkTheme, setDarkTheme] = useState(false);
 

    const handleRegionChange = (region) => {
    setSelectedRegion(region);
    };

    const onThemeToggle = (theme) => {
        setDarkTheme(theme);
    };

    useEffect(() => {
        if (DarkTheme) {
          document.body.classList.add("dark-theme");
        } else {
          document.body.classList.remove("dark-theme");
        }
      }, [DarkTheme]);

  

    
    
    return (
        // TODO: Home page
        // Render Country component (components/Country.jsx) for each country
        // Take data from (assets/CountriesData.json)
        
        <div>
            <Header onThemeToggle={onThemeToggle} />
            <Filters handleRegionChange={handleRegionChange} />
            <CountryGrid selectedRegion={selectedRegion} />
                
            
        </div>
    );
};

export default Home;
