import React from 'react'

export const Country = ({ countryData ,onClick }) => {
  return (
  <div className='country' onClick={onClick}>
    
    <img src={countryData.flag} className='country-flag'></img>

    <div className='country-info'>
      <h2 className='country-title'>{countryData.countryName}</h2>
      <ul className='country-brief'>

        <li>
          <strong>Population: </strong>
          <span className='country-population'>{countryData.population}</span>
        </li>

        <li>
        <strong>region: </strong>
        <span className='country-region'>{countryData.region}</span>
        </li>

        <li>
        <strong>capital: </strong>
        <span className='country-capital'>{countryData.capital}</span>
        </li>

      </ul>
    </div>
  </div>
  )
}
