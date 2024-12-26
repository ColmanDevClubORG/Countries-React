import 'react'


const Country = ({country}) => {
    return (
        <>
            <div className="country-flag">
                <img src={country.flag} alt={country.name}/>
            </div>
            <div className="country-info">
                <h2 className="country-title">{country.name}</h2>
                <ul className="country-brief">
                    <li><strong>Population:</strong> {country.population}</li>
                    <li><strong>Region:</strong> {country.region}</li>
                    <li><strong>Capital:</strong> {country.capital}</li>
                </ul>
            </div>
        </>
    )
}

export default Country