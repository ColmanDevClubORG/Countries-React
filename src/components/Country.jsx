import 'react'

/**
 * Country Component
 * Displays a country's flag, name, population, region, and capital.
 *
 * Props:
 * - country: { flag, name, population, region, capital }
 */
const Country = ({ country: { flag, name, population, region, capital } }) => {
    return (
        <>
            <div className="country-flag">
                <img src={flag} alt={name} />
            </div>
            <div className="country-info">
                <h2 className="country-title">{name}</h2>
                <ul className="country-brief">
                    <li><strong>Population:</strong> {population}</li>
                    <li><strong>Region:</strong> {region}</li>
                    <li><strong>Capital:</strong> {capital}</li>
                </ul>
            </div>
        </>
    );
};

export default Country;