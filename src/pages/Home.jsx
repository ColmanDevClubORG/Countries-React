import { useState } from "react";
import CardData from '../assets/CountriesData.json'
import Country from "../components/Country";
import Filter from "../components/Filter/filter";

const Home = () => {
    const [ filteredCountries, setfilteredCountries ] = useState(CardData);

    const search = (userInput) => {
        const input = userInput.toLowerCase();
        if (input === "all") {
          setfilteredCountries(CardData);
          return;
        }
        const filtered = CardData.filter(({ name, region }) => {
            return name.toLowerCase().includes(input) || region.toLowerCase().includes(input)
        });
      
        setfilteredCountries(filtered);
      };
      
    return (
        <>
            <Filter onSearch={search} />
            <main className="main">
                <div className="container">
                    <section className="countries-grid">
                        {filteredCountries.map((card, index) => {
                            return <Country key={index} card={card} />
                        })}
                    </section>
                </div>
            </main>
        </>
    );
};

export default Home;
