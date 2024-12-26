import { useParams } from "react-router-dom";
import datajson from "../assets/CountriesData.json";
import Navbar from "../components/ui-elements/Navbar";
import BackButton from "../components/ui-elements/BackButton";
import CountryFlag from "../components/country-components/CountryFlag";
import Country from "../components/country-components/Country";
import "../assets/css/details.css";
import "../assets/css/common.css";

const Details = () => {
  const { countryName } = useParams();
  const selectedCountry = datajson.find(
    (country) => country.name === countryName
  );

  return (
    <>
      <Navbar />
      <BackButton />
      <main className="main">
        <div className="container">
          <section className="country-details">
            <CountryFlag
              src={selectedCountry.flag}
              alt={selectedCountry.name}
            />
            <Country country={selectedCountry}></Country>
          </section>
        </div>
      </main>
    </>
  );
};

export default Details;
