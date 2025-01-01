import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
const API_URL = "https://restcountries.com/v3.1/";

function Details() {
  const countryId = useParams().countryId;
  const [country, setCountry] = useState(null);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await fetch(
          `${API_URL}name/${countryId}/?fields=name,capital,flags,population,region,subregion,currencies,borders,tld`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch country data");
        }
        const data = await response.json();
        setCountry(data[0]);
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchCountry();
  }, [countryId]);

  if (!country) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Link to="/">Back</Link>
      <img
        src={country.flags?.svg || ""}
        alt={country.name?.common || ""}
        width={300}
        height={250}
      />
      <h1>{country.name?.common || ""}</h1>
      <p>
        Native name:{" "}
        {Object.values(country.name?.nativeName || {})[0]?.official || ""}
      </p>
      <p>Region: {country.region || ""}</p>
      <p>Sub Region: {country.subregion || ""}</p>
      <p>Capital: {country.capital?.[0] || ""}</p>
      <p>Top Level Domain: {country.tld?.[0] || ""}</p>
      <p>
        Currencies:
        {country.currencies
          ? Object.keys(country.currencies).map((currencyKey, index) => (
              <span key={index}>
                {country.currencies[currencyKey].name}
                {index < Object.keys(country.currencies).length - 1 ? ", " : ""}
              </span>
            ))
          : ""}
      </p>
      <p>
        Border Countries:{" "}
        {country.borders?.length
          ? country.borders.map((border) => <span key={border}>{border} </span>)
          : "None"}
      </p>
    </div>
  );
}

export default Details;
