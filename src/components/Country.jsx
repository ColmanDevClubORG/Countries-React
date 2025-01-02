import React from 'react';

const Country = ({ cardData: { name, flags, population, region, capital }, onClick }) => {
  return (
    <div className="country scale-effect" onClick={onClick}>
      <div className="country-flag">
        <img src={flags.svg} alt={name.common} />
      </div>
      <div className="country-info">
        <h2 className="country-title">{name.common}</h2>
        <ul className="country-brief">
          <li><strong>Population: </strong>{population}</li>
          <li><strong>Region: </strong>{region}</li>
          <li><strong>Capital: </strong>{capital}</li>
        </ul>
      </div>
    </div>
  );
};

export default Country;
