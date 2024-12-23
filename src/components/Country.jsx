import React from 'react';

export const Country = ({ name, flag, population, region, capital }) => {
  return (
    <a
      className="country scale-effect"
      data-country-name={name}
    >
      <div className="country-flag">
        <img src={flag} alt={`Flag of ${name}`} />
      </div>
      <div className="country-info">
        <h2>{name}</h2>
        <ul className="country-brief">
          <li><strong>Population: </strong>{population}</li>
          <li><strong>Region: </strong>{region}</li>
          <li><strong>Capital: </strong>{capital}</li>
        </ul>
      </div>
    </a>
  );
};
