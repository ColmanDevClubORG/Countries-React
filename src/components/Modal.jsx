/* eslint-disable react/prop-types */

export const CountryModal = ({ country,onClose}) => {
  if (!country) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
          
      <button className="close-btn" onClick={onClose}>
          <i className="fa-regular fa-times"></i>
      </button>

        <div className="modal-content">
        <img src={country.flags.png} alt={`${country.name.common} Flag`} />
          <h2>{country.name.common}</h2>
        <ul>
            <li><strong>population: </strong>{country.population}</li>
            <li><strong>Region: </strong>{country.region}</li>
            <li><strong>capital: </strong>{country.capital}</li>
            <li><strong>Subregion:</strong> {country.subregion}</li>
            <li><strong>Languages:</strong> {country.languages && Object.values(country.languages).join(', ')}</li>
        </ul>
        </div>
      </div>
    </div>
  );
};
