import React from 'react'

const Country = ({ name, flag, population, region, capital, onClick }) => {
  return (
    <div className='country' onClick={onClick}>
      <div className="country-flag">
        <img src={flag} alt={`Flag of ${name}`} />
      </div>
      <div className="country-info">
        <h3 className="country-title">{name}</h3>
        <ul className="country-brief">
          <li>Population: {population.toLocaleString()}</li>
          <li>Region: {region}</li>
          <li>Capital: {capital}</li>
        </ul>
      </div>
    </div>
  );
};

export default Country;
