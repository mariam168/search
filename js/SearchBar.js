import React from 'react';

const SearchBar = ({ searchValue, handleSearch, toggleSearch, onSearchSubmit }) => {
  const handleSearchSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission
    onSearchSubmit(searchValue); // Calls the search submit function with the current search value
  };

  return (
    <div className='pluring'>
      <div className='navSearch'>
        <div className='navSearchContent'>
          <form onSubmit={handleSearchSubmit}>
            <input
              type='search'
              placeholder='Search for Book Or Author....'
              value={searchValue}
              onChange={(e) => handleSearch(e.target.value)} // Directly updates search value
            />
            <div className='navSearchButton'>
              <button type='submit'>Search</button>
              <button type='button' onClick={toggleSearch}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
