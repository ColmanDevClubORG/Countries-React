import 'react';
/**
 * SearchBox Component
 * A search input field with an accompanying icon for filtering countries.
 *
 * Props:
 * - action: Function triggered on input change to handle search functionality.
 *
 * Functionality:
 * - Calls the `action` function whenever the user types in the input field.
 */
const SearchBox = ({action}) => {

    return (
        <div className="search-wrapper">
            <i className="fa-solid fa-magnifying-glass search-icon"></i>
            <input
                type="text"
                className="search-input"
                placeholder="Search for a country..."
                onChange={(e) => action(e.target.value)}
            />
        </div>
    );
};

export default SearchBox;