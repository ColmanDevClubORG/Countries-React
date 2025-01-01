import { Dropdown } from "../components/Dropdown"
import { SearchInput } from "./SearchInput"

export const Filters= ({ onSearch, onFilter })=>
{
    return(
      <section className="filters">
         <div className="container">
        <SearchInput onSearch={onSearch} />
        <Dropdown onFilter={onFilter} />
      </div>
      </section>
    )
}
