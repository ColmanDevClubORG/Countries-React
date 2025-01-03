import 'react'

/**
 * Country Component
 * Displays a country's flag, name, population, region, and capital.
 *
 * Props:
 * - country: { flag, name, population, region, capital }
 */
const Country = ({ country }) => {
    const { flags, name, population, region, capital } = country;

    return (
        <div className="country-card">
            <div className="country-flag">
                <img src={flags.png} alt={name.common} />
            </div>
            <div className="country-info">
                <h2 className="country-title">{name.common}</h2>
                <ul className="country-brief">
                    <li><strong>Population:</strong> {population.toLocaleString()}</li>
                    <li><strong>Region:</strong> {region}</li>
                    <li><strong>Capital:</strong> {capital ? capital[0] : "N/A"}</li>
                </ul>
            </div>
        </div>
    );
};

export default Country;