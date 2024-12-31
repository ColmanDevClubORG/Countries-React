import React from "react";
import { Header } from "../components/header";
import { Filter } from "../components/Filter";
import datajson from "../assets/CountriesData.json"
import { Country } from "../components/Country";

export const Home = () => {
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
                        {
                            datajson.map((cardD, index) => (
                                <Country countryData={cardD} key={cardD.name}></Country>
                            ))
                        }
                </div>
                </div>
            </div>
        </div>
    );
};