import React, { useState } from "react";
import {Country} from "../components/Country"
import data from '../assets/CountriesData.json'


const Home = () => {
    const [cards, setCards]=useState(data)
    const onSearch=(e)=>{
        const newData= data.filter((card)=>card.name.toLowerCase().includes(e.target.value.toLowerCase()));
        console.log(newData)
        setCards(newData);
    
    }
    
    return (
        <div>
            <input type="text" className="search-input" placeholder="Search for a country..." onChange={onSearch}></input>
            <div className="countries-grid"> 
                { cards.map((card)=>{
                    return (
                    <Country 
                    key={card.name}
                    name={card.name} 
                    flag={card.flag} 
                    population={card.population} 
                    region={card.region} 
                    capital={card.capital}> </Country>
                )
            })

        }
        </div>
        </div>
    );
};

export default Home;
