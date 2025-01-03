import React from 'react';
import { constants } from '../assets/data';

const Country = ({
  country: { name, flags, population, region, capital },
  onClick,
}) => {
  return (
    <a
      className='country scale-effect'
      data-country-name={name?.common}
      onClick={onClick}
    >
      <div className='country-flag'>
        <img src={flags? flags.png:constants.NO_IMG} />
      </div>
      <div className='country-info'>
        <h2 className='country-title'>{name?.common}</h2>
        <ul className='country-brief'>
          <li>
            <span className='bold'>Population: </span>
            {population?.toLocaleString()}
          </li>
          <li>
            <span className='bold'>Region: </span>
            {region}
          </li>
          <li>
            <span className='bold'>Capital: </span>
            {capital?.[0] ?? capital}
          </li>
        </ul>
      </div>
    </a>
  );
};

export default Country;
