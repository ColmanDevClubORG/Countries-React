import React from "react";

const Modal = ({ country, onClose }) => {
  if (!country) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>{country.name}</h2>
        <img src={country.flag} alt={`Flag of ${country.name}`} />
        <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
        <p><strong>Region:</strong> {country.region}</p>
        <p><strong>Capital:</strong> {country.capital}</p>
        <p><strong>Subregion:</strong> {country.additionalInfo.subregion}</p>
        <p><strong>Languages:</strong> {country.additionalInfo.languages}</p>
        <p><strong>Borders:</strong> {country.additionalInfo.borders}</p>
      </div>
    </div>
  );
};

export default Modal;
