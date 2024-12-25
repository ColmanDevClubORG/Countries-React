import React from "react";
import {Header} from "../components/Header";
import { Filters } from "../components/Filters";
import { Country } from "../components/Country";
import datajson from "../assets/CountriesData.json";


const Home = () => {
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
                        {datajson.map((cardD, index) => (
                            <Country countryData={cardD} key={cardD.name}></Country>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;

