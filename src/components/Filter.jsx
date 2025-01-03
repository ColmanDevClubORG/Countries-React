import { useState } from 'react';
import { nanoid } from 'nanoid';
import { regions } from '../assets/data';

const Filter = ({
  setSearchValue,
  searchValue,
  setSelectedRegion,
  selectedRegion,
}) => {
  const [openDropDown, setOpenDropDown] = useState(false);

  const toggleDropDown = ()=>{
    setOpenDropDown(!openDropDown)
  }
  return (
    <>
      <section className='filters'>
        <div className='container'>
          <div className='search-wrapper'>
            <i className='fa-regular fa-magnifying-glass search-icon'></i>
            <input
              type='text'
              className='search-input'
              placeholder='Search for a country...'
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>

          <div className='dropdown-wrapper' onClick={toggleDropDown}>
            <div className='dropdown-header flex flex-jc-sb flex-ai-c'>
              <span>{selectedRegion}</span>
              <i className='fa-regular fa-chevron-down icon'></i>
            </div>
            <div>
              <div className={`dropdown-body ${openDropDown&&'open'}`}>
                <ul>
                  {regions.map((region, index) => {
                    return (
                      <li
                        key={nanoid()}
                        className='li-drop'
                        onClick={() => setSelectedRegion(region)}
                      >
                        {region}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Filter;
