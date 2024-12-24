import 'react';

const SearchBox = () => {
    return (
        <div className="search-wrapper">
            <i className="fa-solid fa-magnifying-glass search-icon"></i>
            <input
                type="text"
                className="search-input"
                placeholder="Search for a country..."
            />
        </div>
    );
};

export default SearchBox;