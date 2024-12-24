import React from 'react'
const Country = (props) => {
  const { name, flag, population, region, capital } = props.country

  return (
    <a className="country scale-effect" data-country-name={name}>
      <div className="country-flag">
        <img src={flag} />
      </div>
      <div className="country-info">
        <h2 className="country-title">{name}</h2>
        <ul className="country-brief">
          <li>
            <strong>Population: </strong>
            {population.toLocaleString()}
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
    </a>

  )
}

export default Country