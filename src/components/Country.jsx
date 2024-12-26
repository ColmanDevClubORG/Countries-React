import React from 'react'

const Country = ({cardData}) => {
  return (
    <>
    <a href="details.html" className="country scale-effect" data-country-name={cardData.name}>
          <div className="country-flag">
            <img src={cardData.flag}
              alt={cardData.name} />
          </div>
          <div className="country-info">
            <h2 className="country-title">{cardData.name}</h2>
            <ul className="country-brief">
              <li><strong>population: </strong>{cardData.population}</li>
              <li><strong>Region: </strong>{cardData.region}</li>
              <li><strong>capital: </strong>{cardData.capital}</li>
            </ul>
          </div>
        </a>
    </>
  )
}

export default Country