import { useState } from "react";
import { Country } from "../components/Country";
import data from "../assets/CountriesData.json";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";


export const Home = () => {

    const [countries, setcountries] = useState(data);
    return (
        <>  
        <Header></Header>
        <SearchBar></SearchBar>
            <div className="main container">
            <div className="countries-grid" >
                {
                    countries.map(
                    (country) => {return <Country key={country.name} {...country}
                     />
                     })
               }
            </div>
        </div></>
 
    );
};

export default Home;
