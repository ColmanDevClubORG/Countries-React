import React from 'react';


const Country = ({
  country: { name, flags, population, region, capital },
  onClick,
  index
}) => {
  return (
    <a
      className='country scale-effect'
      data-country-name={name?.common}
      onClick={onClick}
    >
      <div className='country-flag'>
        <img src={flags?.png} />
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
            {index}
          </li>
          <li>
            <span className='bold'>Capital: </span>
            {capital? capital[0]:capital }
          </li>
        </ul>
      </div>
    </a>
  );
};

export default Country;
