import { useState } from "react"

const Filter = (props) => {
  const [openDropDown,setOpenDropDown] = useState(false)
  return (
    <>
      <section className='filters'>
        <div className='container'>

          <div className="search-wrapper">
            <i className="fa-regular fa-magnifying-glass search-icon"></i>
            <input type="text" className="search-input" placeholder="Search for a country..." value={props.searchValue} onChange={(e)=>props.setSearchValue(e.target.value)}/>
          </div>

          <div className="dropdown-wrapper" onClick={()=>setOpenDropDown(!openDropDown)}>
            <div className="dropdown-header flex flex-jc-sb flex-ai-c">
              <span>{props.selectedRegion}</span>
              <i className="fa-regular fa-chevron-down icon"></i>
            </div>
            <div >
              <div className={`dropdown-body ${openDropDown? "open":""}`}>
                <ul>
                  <li className="li-drop" onClick={() => props.setSelectedRegion("All")}>All</li>
                  <li className="li-drop" onClick={() => props.setSelectedRegion("Africa")}>Africa</li>
                  <li className="li-drop" onClick={() => props.setSelectedRegion("Americas")}>America</li>
                  <li className="li-drop" onClick={() => props.setSelectedRegion("Asia")}>Asia</li>
                  <li className="li-drop" onClick={() => props.setSelectedRegion("Europe")}>Europe</li>
                  <li className="li-drop" onClick={() => props.setSelectedRegion("Oceania")}>Oceania</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Filter