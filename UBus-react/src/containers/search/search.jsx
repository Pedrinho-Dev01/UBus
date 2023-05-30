import React from 'react';
import './search.css';

const Search = ({onClose}) => {
  
  const handleClose = () => {
    onClose();
  };

  const handleSearch = () => {

    // create a search that checks if the search input is one of the buses in the list

    // close the modal search window and scroll down to the map
    onClose();
    document.getElementById("Service-map").scrollIntoView({behavior: "smooth"});
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