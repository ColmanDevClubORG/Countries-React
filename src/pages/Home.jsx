import React from "react";
import {Header} from "../components/Header";
import { Filters } from "../components/Filters";
import { Country } from "../components/Country";
import { useState } from "react";
import { useEffect } from "react";
import { Modal } from "../components/Modal";



const Home = () => {

    const [countries,setCountries]=useState([]);
    const [selectedCountry,setSelectedCountry]=useState(null);

    useEffect(()=>{
        const fetchCountries=async()=>{
            try{
                const response=await fetch("https://restcountries.com/v3.1/all");
                const data= await response.json();

                console.log("data fetched");

                const filteredData=data.map((country)=>({
                    countryName: country.name.common,
                    population: country.population,
                    region: country.region,
                    capital: country.capital ? country.capital[0] :"N/A",
                    flag: country.flags.svg,
                }));

                console.log("filtered data",filteredData);

                setCountries(filteredData);
            }catch (error){
                console.error("Error fetching countries:", error);
            }
        };
        fetchCountries();

    },[]);

    const openModal=(country)=>{
        console.log('Opening modal for:', country);
        setSelectedCountry(country);
    }
    const closeModal=()=>{
        setSelectedCountry(null);
    }


    return (
     
        <div>

            <header className="header">
                <Header></Header>
            </header>

            <section className="filters">
                <Filters></Filters>
            </section>

            <div className="main">
                <div className="container">
                    <div className="countries-grid">
                        {countries.map((countryData) => (
                            <Country
                            countryData={countryData}
                            key={countryData.countryName}    
                            onClick={()=>openModal(countryData)}
                            />
                        ))}
                    </div>
                </div>
            </div>
            {selectedCountry&& (
                <>
                {console.log("Modal is rendering for:", selectedCountry)}
                <Modal countryData={selectedCountry} onClose={closeModal}/>
                </>
            )}

        </div>
    );
};

export default Home;

