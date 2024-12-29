/* eslint-disable react/prop-types */

const Country = ({ country: { name, flag, population, region, capital } }) => {
  return (
    <div className="country scale-effect" data-country-name="${country.name}">
      <div className="country-flag">
        <img src={flag} alt={name} />
      </div>
      <div className="country-info">
        <h2 className="country-title">{name}</h2>
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
            {capital}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Country;
