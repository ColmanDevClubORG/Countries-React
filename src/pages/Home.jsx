import {CountryComponent} from "../components/Country";
import {Header,Scroll,Dropdown} from "../components/Header";
import {useEffect,useState} from "react";
import {CountryModal} from "../components/Modal";


export const Home = () => {
    
    const [countries, setCountries] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedRegion, setSelectedRegion] = useState("all");
    const [selectedCountry, setSelectedCountry] = useState(null);

    
    
useEffect(() => {
    const fetchCountries = async () => {
        try {
            const response = await fetch("https://restcountries.com/v3.1/all");
            if (!response.ok) {
                throw new Error("Something went wrong!");
            }
            const data = await response.json();
            setCountries(data);
        } catch (error) {
            console.error(error);
        }
    };

    fetchCountries();
    },[]);


    const filterCountries = countries.filter((country) => {
        const matchesSearchQuery =
          country.name.common.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesRegion =
          selectedRegion === "all" || country.region.toLowerCase() === selectedRegion.toLowerCase();
        return matchesSearchQuery && matchesRegion;
      });

      const handleRegionSelect = (region) => {
        setSelectedRegion(region);
      };
    
      const handleCountryClick = (country) => {
        setSelectedCountry(country); 
      };
    
      const handleCloseModal = () => {
        setSelectedCountry(null); 
      };

    return (
        <>
            <Scroll/>
            <Header/>

            <div>
                <section className="filters">
                    <div className="container">
                        <div className="search-wrapper">
                        <i className="fa-regular fa-magnifying-glass search-icon"></i>
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Search for a country..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        </div>
                        <Dropdown onRegionSelect={handleRegionSelect} />
                    </div>
                </section>
            
                <main className="main">
                    <div className="container">
                        <section className="countries-grid">
                            {filterCountries.map((country,index) => (
                                <div key={index} onClick={() => handleCountryClick(country)}>
                            <CountryComponent country={country} />
                            </div>
                        ))}
                        </section>
                    </div>
                </main>
            </div>
            <CountryModal country={selectedCountry} onClose={handleCloseModal} />
        </>
    );
};

