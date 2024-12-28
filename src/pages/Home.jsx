import { useState } from "react";
import { Country } from "../components/Country";
import data from "../assets/CountriesData.json";

export const Home = () => {
    const [countries, setcountries] = useState(data);
    return (
        <div className="main container">
            <div className="countries-grid" >
                {
                    countries.map(
                    (country) => {return <Country key={country.name} {...country}
                     />
                     })
               }
            </div>
        </div>
    );
};
export default Home
