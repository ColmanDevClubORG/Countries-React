import React from "react";
import { Country } from "./Country";

export const CountriesGrid =({countries})=>
{
    return (
        <section className="countries-grid">
          {countries.map((country) => (
            <Country cardData={country} key={country.name} />
          ))}
        </section>
      );
}
