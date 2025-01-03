import React, { useState } from 'react';
import Filter from '../components/Filter';
import useFetchCountries from '../components/Hooks/useFetchCountries';
import Modal from '../components/Modal';
import Countries from '../components/Countries';

const Home = () => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const { countries } = useFetchCountries(selectedRegion, searchValue);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalCountry, setModalCountry] = useState(countries[0]);

  const openModal = (country) => {
    setModalCountry(country);
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Filter
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
      />
      <Countries countries={countries} openModal={openModal} />

      {isModalOpen && (
        <Modal closeModal={closeModal} modalCountry={modalCountry} />
      )}
    </>
  );
};

export default Home;
