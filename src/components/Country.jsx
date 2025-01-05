import React from 'react'
import "../assets/css/main.css"


const Country = ({ country }) => {
  return (
    <div className='country'>
      <div className='country-flag'>
        <img src={country.flag} alt={`${country.name} flag`} className='country-flag img' />
      </div>
      <div className='country-info'>
        <h2 className='country-title'>{country.name}</h2>
        <ul>
          <li className='country-brief li'><strong>Population: </strong>{country.population}</li>
          <li className='country-brief li'><strong>Region: </strong>{country.region}</li>
          <li className='country-brief li'><strong>Capital: </strong>{country.capital}</li>
        </ul>
      </div>
    </div>
  )
}

export default Country