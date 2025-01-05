import React from "react";
import { Header } from "../components/header";
import { Filter } from "../components/Filter";
import { Country } from "../components/Country";
import {useState} from "react"; 
import {useEffect} from "react";
import {Modal} from "../components/Modal"



export const Home = () => {

        const [countries, setCountries]=UseState([]);
        const[selectedCountry, setSelectedCountry]=useState(null); 

        useEffect(()=>{
            const fetchCountries=async()=>{
                try{
                    const response=await fetch("http://restcountries.com/v3.1/all");
                    const data=await response.json(); 
                    console.log("data fetched");
                    const filteredData=data.map((country)=>({
                        countryName : country.name.common, 
                        population : country.population, 
                        refion : country.region,
                        capital : country.capital ? country.capital[0] : "N/A",
                        flag: country.flags.svg,
    
                    })); 
                    console.log("filtered data", filteredData);

                    setCountries(filteredData); 
                }
                catch (error){
                console.error("error fetching countries:", error); 
                }
            };
            fetchCountries(); 
        },[]);
        
        const openModal=(country)=>{
            console.log('opening modal for:', country);
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
                <Filter></Filter>
            </section>

            <div className="main">
                <div className="container">
                    <div className="countries-grid">
                        {countries.map((countryData)=>(
                            <Country
                                countryData={contryData}
                                key={countryData.countryName}
                                onClick={()=>openModal(countryData)}
                            />
                        ))}
                </div>
                </div>
            </div>
        </div>
    );
};