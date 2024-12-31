import React from 'react'
const Country = ({ country: { name, flag, population, region, capital } }) => {
  return (
    <a className="country scale-effect" data-country-name={name}>
      <div className="country-flag">
        <img src={flag} />
      </div>
      <div className="country-info">
        <h2 className="country-title">{name}</h2>
        <ul className="country-brief">
          <li>
            <span className='bold'>Population: </span>
            {population.toLocaleString()}
          </li>
          <li>
            <span className='bold'>Region: </span>
            {region}
          </li>
          <li>
            <span className='bold'>Capital: </span>
            {capital}
          </li>
        </ul>
      </div>
    </a>

  )
}

export default Country