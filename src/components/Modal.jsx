import React from "react";
import "./modal.css";



export const Modal = ({ countryData, onClose }) => {
    if (!countryData) return null;

    const { countryName, flag, region, population, capital } = countryData;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                {/* <button class="close-button" onclick="closeModal()">X</button> */}
                <div className="country-flag">
                    <img src={flag} alt={`${countryName} flag`} />
                </div>
                <div className="country-info">
                    <h1>{countryName}</h1>
                    <ul>
                        <li><strong>Population: </strong>{population}</li>
                        <li><strong>Region: </strong>{region}</li>
                        <li><strong>Capital: </strong>{capital}</li>

                    </ul>
                </div>

            </div>
        </div>
    )


}