import React from "react";
import "../assets/css/Modal.css";

const Modal = ({ selectedCountry, isOpen, onClose }) => {
    if (!isOpen) return null;
    const { name, flags, population, region, capital } = selectedCountry;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>×</button>
                <h2>{name.common}</h2>
                <img className="img-selected-country" src={selectedCountry.flags.svg} alt={name.common} />
                <p><strong>Population:</strong> {population}</p>
                <p><strong>Region:</strong> {region}</p>
                <p><strong>Capital:</strong> {capital}</p>
            </div>
        </div>
    );
};

export default Modal;