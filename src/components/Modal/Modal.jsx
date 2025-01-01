import React from 'react';
import './modal.css'

const Modal = ({ isOpen, Close, countryData }) => {
  if (!isOpen) return null;

  const { flags, name, population, region, capital, languages } = countryData;
  const languagesToList = Object.values(languages).join(', ');

  return (
    <div id="modal-overlay" onClick={Close}>
      <div id="modal-content">
        <a id="close-button-modal" onClick={Close}>&#10005;</a>
        <div id="modal-header">
          <img src={flags.png} alt={`${name.common} Flag`} id="modal-flag" />
          <h2>{name.common}</h2>
        </div>
        <div id="modal-body">
          <ul>
            <li><strong>Population: </strong>{population.toLocaleString()}</li>
            <li><strong>Region: </strong>{region}</li>
            <li><strong>Capital: </strong>{capital}</li>
            <li><strong>languages: </strong>{languagesToList}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Modal;
