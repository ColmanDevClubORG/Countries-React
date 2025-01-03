import React from "react";
import "../assets/css/details.css";

const Modal = ({ isOpen, onClose, country }) => {
    if (!isOpen) return null;

    const { flags, name, population, region, capital, subregion, area, currencies, languages } = country;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>✖</button>
                <div className="modal-header">
                    <img src={flags.png} alt={name.common} />
                    <h2>{name.common}</h2>
                </div>
                <div className="modal-body">
                    <p><strong>Official Name:</strong> {name.official}</p>
                    <p><strong>Population:</strong> {population.toLocaleString()}</p>
                    <p><strong>Region:</strong> {region}</p>
                    <p><strong>Subregion:</strong> {subregion}</p>
                    <p><strong>Capital:</strong> {capital ? capital[0] : "N/A"}</p>
                    <p><strong>Area:</strong> {area.toLocaleString()} km²</p>
                    <p><strong>Currencies:</strong> {currencies ? Object.values(currencies).map(c => c.name).join(", ") : "N/A"}</p>
                    <p><strong>Languages:</strong> {languages ? Object.values(languages).join(", ") : "N/A"}</p>
                </div>
            </div>
        </div>
    );
};

export default Modal;