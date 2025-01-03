/* eslint-disable react/prop-types */

import { useNavigate } from "react-router";

const Country = ({
  country: {
    name: { common },
    flags: { svg, alt },
    population,
    region,
    capital,
  },
}) => {
  const navigate = useNavigate();

  const onCountryClick = () => {
    navigate(`/details/${common}`);
  };
  return (
    <div
      className="country scale-effect"
      data-country-name="${country.name}"
      onClick={onCountryClick}
    >
      <div className="country-flag">
        <img src={svg} alt={alt} />
      </div>
      <div className="country-info">
        <h2 className="country-title">{common}</h2>
        <ul className="country-brief">
          <li>
            <strong>Population: </strong>
            {population}
          </li>
          <li>
            <strong>Region: </strong>
            {region}
          </li>
          <li>
            <strong>Capital: </strong>
            {capital[0]}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Country;
