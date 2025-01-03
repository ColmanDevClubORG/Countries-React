import React from 'react'

const Country = ({ cardData: { name, flag, population, region, capital }}) => {
  // const { name, flag, population, region, capital } = cardData;

  return (
    <a href="details.html" className="country scale-effect" data-country-name={name}>
      <div className="country-flag">
        <img src={flag} alt={name} />
      </div>
      <div className="country-info">
        <h2 className="country-title">{name}</h2>
        <ul className="country-brief">
          <li><strong>Population: </strong>{population}</li>
          <li><strong>Region: </strong>{region}</li>
          <li><strong>Capital: </strong>{capital}</li>
        </ul>
      </div>
    </a>
  );
};

export default Country