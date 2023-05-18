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
        <h2 className='gradient__text'>Search for More Information</h2>
        <input id="search-input" type="text" placeholder="Enter your search query" />
        <button type="button" onClick={handleSearch}>
          Search
        </button>

        <div className="additional-content K7__header-content__input">
          <p>Additional information can go here.</p>
        </div>

        <button className="close-button" onClick={handleClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Search;