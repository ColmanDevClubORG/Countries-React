import { useState } from "react";
import Header from "../components/Header";
import Country from "../components/Country";
import CountriesData from "../assets/CountriesData.json";
import Filters from "../components/Filters";
import ScrollTop from "../components/ScrollTop";

const Home = () => {
  const [countries, setCountries] = useState(CountriesData);
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [searchText, setSearchText] = useState("");

  const onRegionChanged = (e) => {
    const region = e.target.getAttribute("data-region");
    setSelectedRegion(region);
  };

  const onSearchTextChanged = (e) => {
    setSearchText(e.target.value);
  };

  const filteredCountries = countries.filter((country) => {
    const regionFilter =
      selectedRegion === "all" ||
      country.region.toLowerCase().includes(selectedRegion.toLowerCase());
    const searchFilter = country.name
      .toLowerCase()
      .includes(searchText.toLowerCase());

    return regionFilter && searchFilter;
  });

  console.log(filteredCountries);

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
            {filteredCountries.map((countryData) => (
              <Country key={countryData.name} country={countryData} />
            ))}
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;
