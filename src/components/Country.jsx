import Modal from "./Modal/Modal";
import { useState } from "react";

const Country = ({card}) => {
  const { flags, name, population, region, capital } = card;
  const [ isOpen, setOpen ] = useState(false)

  const openModal = () => {
    setOpen(true)
  }

  const closeModal = () => {
    setOpen(false)
  }
  return (
    <>
      <a className="country scale-effect" data-country-name={name.common} onClick={openModal}>
        <div className="country-flag">
          <img src={flags.png} alt="Belize FLag" />
        </div>
        <div className="country-info">
          <h2 className="country-title">{name.common}</h2>
          <ul className="country-brief">
            <li><strong>population: </strong>{population.toLocaleString()}</li>
            <li><strong>Region: </strong>{region}</li>
            <li><strong>capital: </strong>{capital}</li>
          </ul>
        </div>
      </a>
      <Modal isOpen={isOpen} Close={closeModal} countryData={card} />
    </>
  );
};

export default Country