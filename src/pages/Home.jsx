import { useEffect, useState } from "react";
import Header from "../components/Header";
import Country from "../components/Country";
import Filters from "../components/Filters";
import ScrollTop from "../components/ScrollTop";

const API_URL =
  "https://restcountries.com/v3.1/all?fields=name,capital,flags,population,region";

const Home = () => {
  const [countries, setCountries] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Failed to fetch country data");
        }
        const data = await response.json();
        setCountries(data);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchCountry();
  }, []);

  const onRegionChanged = (e) => {
    const region = e.target.getAttribute("data-region");
    setSelectedRegion(region);
  };

  const onSearchTextChanged = (e) => {
    setSearchText(e.target.value);
  };

  const filteredCountries = countries
    ? countries.filter((country) => {
        const regionFilter =
          selectedRegion === "all" ||
          country.region.toLowerCase().includes(selectedRegion.toLowerCase());
        const searchFilter = country.name.common
          .toLowerCase()
          .includes(searchText.toLowerCase());
        return regionFilter && searchFilter;
      })
    : [];

  return (
    <>
      <ScrollTop />
      <Header />
      <Filters
        onRegionChanged={onRegionChanged}
        onSearchTextChanged={onSearchTextChanged}
        searchText={searchText}
        selectedRegion={selectedRegion}
      />
      <main className="main">
        <div className="container">
          <section className="countries-grid">
            {countries && filteredCountries.length === 0 && (
              <div>No countries found</div>
            )}
            {!countries && <div>Loading Countries</div>}

            {filteredCountries.map((countryData) => (
              <Country key={countryData.name.common} country={countryData} />
            ))}
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;
