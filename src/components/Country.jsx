import React from 'react'

export const Country = ({name ,flag , population , region , capital}) => {
  return (
    // TODO: Country component
    <div className="country scale-effect"> 
    <img src={flag} className="country-flag"></img>
    <div className="country-info">
    <div className="country-brief">
    <p>{name}</p>
    <p>{population}</p>
    <p>{region}</p>
    <p>{capital}</p>
    </div>
    </div>
    </div>
  )
}

export default Country


// "name": "Åland Islands",
// "flag": "https://flagcdn.com/w320/ax.png",
// "population": 21225,
// "region": "Europe",
// "capital": "Mariehamn"