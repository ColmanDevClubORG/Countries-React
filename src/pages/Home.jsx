import React from "react";
import dataJson from "../assets/CountriesData.json"
import { useState, useEffect } from "react";
import Country from "../components/Country"
import Header from "../components/Header"
import Filters from "../components/Filters"
import Modal from '../components/Modal'



const Home = () => {
    const [filteredArray, setfilteredArray] = useState([]);
    const [originalArray, setOriginalArray] = useState([]);
    // const [selectCountry, setIsModalOpen] = useState(false);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags')
        .then((res)=>{
            return res.json(); //made it to js object
        })
        .then((data)=>{
            console.log(data);
            setfilteredArray(data);
            setOriginalArray(data);
        }).catch((err) => {
            console.log(err);
        })
    },[])


    const [isDarkMode, setIsDarkMode] = useState(false); 
    const filterByRegion = (region) => {
        console.log(region);
        
        if(region==="All"){
            setfilteredArray(originalArray);
        }
        else{
            const filtered = originalArray.filter((Country)=>
                Country.region.toLowerCase() === region.toLowerCase());
            setfilteredArray(filtered)
        }
    };

    const matchValue = ({name,population,region,capital}, input) => 
        [name.common,population.toString(),region, capital]
          .some(value => value.toString().toLowerCase().includes(input));
          
      

    const searchInput = (event)=>{
        console.log("enter");
        console.log(event);
        const ourInput = event.toLowerCase().trim();
        const filteredArrayBySearch = originalArray.filter((country)=>{
            console.log(country);
           return matchValue(country,ourInput);
        })
        if (filteredArrayBySearch.length === 0) {
            setfilteredArray(originalArray);
        } else {
            setfilteredArray(filteredArrayBySearch);
        }
    }

    const changeDarkMode = () => {
        setIsDarkMode(!isDarkMode);

        if (!isDarkMode) {
            document.body.classList.toggle("dark-theme", !isDarkMode);
        } else {
            document.body.classList.remove("dark-theme");
        }
    };

    const [selectedCountry, setSelectedCountry] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const modalOfSelectedCountry = (cardData) => {
        setSelectedCountry(cardData);
        console.log(selectedCountry);
        setIsModalOpen(true);
    }
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedCountry(null); 
    };
    

   
    return (
        <>
            <Header changeDarkMode={changeDarkMode} />
            <Filters filterByRegionFunc={(region)=>filterByRegion(region)} filterBySearchFunc={(event)=>{searchInput(event.target.value)}} />
            <main className="main">
                <div className="container">
                    <section className="countries-grid">
                    {filteredArray.map((cardInfo,index)=>(
                        <Country cardData={cardInfo} key={cardInfo.name.common} onClick={()=>modalOfSelectedCountry(cardInfo)}/>
                    ))}
                    </section>
                </div>
            </main>
            <Modal
                selectedCountry={selectedCountry} //props
                isOpen={isModalOpen}
                onClose={closeModal}
            />

        </>
    )
};


export default Home;
