export const SearchInput= ({onSearch})=>
{
    return(
        <div className="search-wrapper">
            <i className="fa-regular fa-magnifying-glass search-icon"></i>
            <input
                type="text"
                className="search-input"
                placeholder="Search for a country..."
                onChange={(e) => onSearch(e.target.value)}
            />
        </div>
    )
}

