import React from "react";
import dataJson from "../assets/CountriesData.json"
import { useState } from "react";
import Country from "../components/Country"
import Header from "../components/Header"
import Filters from "../components/Filters"



const Home = () => {
    const [filteredArray, setfilteredArray] = useState(dataJson);
    const [isDarkMode, setIsDarkMode] = useState(false); 
    const filterByRegion = (region) => {
        console.log(region);
        
        if(region==="All"){
            setfilteredArray(dataJson);
        }
        else{
            const filtered = dataJson.filter((Country)=>
                Country.region.toLowerCase() === region.toLowerCase());
            setfilteredArray(filtered)
        }
    };

    const matchValue = (country,input) =>{
        return country.name.toLowerCase().includes(input) ||
            country.population.toString().includes(input) ||
            country.region.toLowerCase().includes(input) ||
            country.capital.toLowerCase().includes(input)
    }

    const searchInput = (event)=>{
        console.log("enter");
        console.log(event);
        const ourInput = event.toLowerCase().trim();
        const filteredArrayBySearch = dataJson.filter((country)=>{
           return matchValue(country,ourInput);
        })
        setfilteredArray(filteredArrayBySearch);
    }

    const changeDarkMode = () => {
        setIsDarkMode(!isDarkMode);

        if (!isDarkMode) {
            document.body.classList.add("dark-theme");
        } else {
            document.body.classList.remove("dark-theme");
        }
    };

   
    return (
        <>
            <Header changeDarkMode={changeDarkMode} />
            <Filters filterByRegionFunc={(region)=>filterByRegion(region)} filterBySearchFunc={(event)=>{searchInput(event.target.value)}} />
            <main className="main">
                <div className="container">
                    <section className="countries-grid">
                    {filteredArray.map((cardInfo,index)=>(
                        <Country cardData={cardInfo} key={cardInfo.name} />
                    ))}
                    </section>
                </div>
            </main>

        </>
    )
};


export default Home;
