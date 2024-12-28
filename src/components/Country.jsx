export const Country = ({name,flag, population, region, capital}) => {
  return (
  
    <div className="country">
    <img className="country-flag" src={flag} alt={`Flag of ${name}`} />
    <div className="country-info">
      <h3 className="country-title">{name}</h3>
      <ul className='country-brief'>
        <li>Population: {population}</li>
        <li>Region: {region}</li>
        <li>Capital: {capital}</li>
      </ul>
      
    </div>
  </div>
  )
}

export default Country



