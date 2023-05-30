import React, { useState } from 'react';
import './search.css';

const Search = ({ onClose }) => {
  const handleClose = () => {
    onClose();
  };

  const handleSearch = () => {
    // create a search that checks if the search input is one of the buses in the list

    // close the modal search window and scroll down to the map
    onClose();
    document.getElementById('Service-map').scrollIntoView({ behavior: 'smooth' });
  };

  const [search, setSearch] = useState('');

  const mockData = [
    {
      text: 'Bus #16',
    },
    {
      text: 'Bus #18',
    },
    {
      text: 'Bus #23',
    },
    {
      text: 'Bus #37',
    },
    {
      text: 'Bus #42',
    },
    {
      text: 'Bus #45',
    },
    {
      text: 'Bus #49',
    },
  ];

  return (
    <div className="modal-overlay K7__header section__padding">
      <div className="modal-content K7__header-content">
        <button className="close-button" onClick={handleClose}>
          X
        </button>

        <h2 className="gradient__text">Search for More Information</h2>
        <p></p>
        <input
          id="search-input"
          type="text"
          placeholder="Enter your search query"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <div className="result-box">
          <ul>
            {search && // Added condition to check if search is not empty
              mockData
                .filter((item) =>
                  item.text.toLowerCase().includes(search.toLowerCase())
                )
                .map((item, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      // when the user clicks on the search result, the search input will be filled with the result
                      setSearch(item.text);
                    }}
                    style={{
                      display: item.text
                        .toLowerCase()
                        .includes(search.toLowerCase())
                        ? 'block'
                        : 'none',
                    }}
                  >
                    {item.text}
                  </li>
                ))}
          </ul>
        </div>
        <button type="button" className="searchBtn" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
