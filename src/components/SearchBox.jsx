import 'react';

const SearchBox = ({action}) => {
    return (
        <div className="search-wrapper">
            <i className="fa-solid fa-magnifying-glass search-icon"></i>
            <input
                type="text"
                className="search-input"
                placeholder="Search for a country..."
                onInput={action}
            />
        </div>
    );
};

export default SearchBox;