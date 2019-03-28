import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props);
  }

  handleSearch = (event) => {
    console.log(event.currentTarget.value);
  }

  render(){
    return (
      <input
        className="form-control form-search"
        type="text"
        onKeyUp={this.handleSearch}
      />
    )
  }
}

export default SearchBar;
