import React from 'react';
import './search.css';

const Search = ({onClose}) => {
  
  const handleClose = () => {
    onClose();
  };

  const handleSearch = () => {
    // Perform search logic
    // Retrieve search query and call onSearch function
    const searchQuery = document.getElementById('search-input').value;
  };


  return (
    <div className="modal-overlay K7__header section__padding">
      <div className="modal-content K7__header-content">
      
      <button className="close-button" onClick={handleClose}>
          X
      </button>

        <h2 className='gradient__text'>Search for More Information</h2>
        <p></p>
        <input id="search-input" type="text" placeholder="Enter your search query" />
        <button type="button" className='searchBtn' onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;