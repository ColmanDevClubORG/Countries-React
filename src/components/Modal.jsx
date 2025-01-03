const Modal = ({ closeModal, modalCountry }) => {
  const {name,flags,population,region,capital} = modalCountry
  return (
    <div className='modal-overlay'>
      <div className='modal-content'>
        <button className='close-btn' onClick={closeModal}>
          X
        </button>
        <img src={flags?.png} alt='flag' />
        <h2>{name?.common}</h2>
        <p>
          <span className='bold'>Capital:</span> {capital? capital[0]:capital}
        </p>
        <p>
          <span className='bold'>Region:</span> {region}
        </p>
        <p>
          <span className='bold'>Population:</span>{' '}
          {population?.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default Modal;
