import React from 'react';

const SearchBar = (props) => {
  return (
    <input
      className="form-control form-search"
      type="text"
      onKeyUp={props.handleSearch}
    />
  )
}

export default SearchBar;
