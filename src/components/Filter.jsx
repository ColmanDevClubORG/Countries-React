import { useState } from 'react';

const regions = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

const Filter = ({
  setSearchValue,
  searchValue,
  setSelectedRegion,
  selectedRegion,
}) => {
  const [openDropDown, setOpenDropDown] = useState(false);
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

          <div
            className='dropdown-wrapper'
            onClick={() => setOpenDropDown(!openDropDown)}
          >
            <div className='dropdown-header flex flex-jc-sb flex-ai-c'>
              <span>{selectedRegion}</span>
              <i className='fa-regular fa-chevron-down icon'></i>
            </div>
            <div>
              <div className={`dropdown-body ${openDropDown ? 'open' : ''}`}>
                <ul>
                  {regions.map((region) => {
                    return (
                      <li
                        className='li-drop'
                        onClick={() => setSelectedRegion({ region })}
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
