import React, { useState } from 'react';
import './header.css';
import homePage from '../../assets/homeIMG.jpg';
import Search from '../search/search';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSearch = (searchQuery) => {
    // Perform search logic with the searchQuery
    // You can make API requests, update state, etc.
    console.log('Performing search with query:', searchQuery);
  };

  return (
    <div className='K7__header section__padding' id='home'>
      <div className='K7__header-content'>
        <h1 className='gradient__text'>UBus</h1>
        <h1 className='gradient__text' id='slogan'>Smart Mobility Made Simple</h1>
        <p>Search for Real-time information on our routes and buses.</p>

        <div className="K7__header-content__input">
          <button type="button" className='searchBtn' onClick={openModal}>Search</button>
        </div>
      </div>

      <div className='K7__header-img'>
        <img src={homePage} alt='Front Page'/>
      </div>

      {isModalOpen && <Search onClose={closeModal} onSearch={handleSearch} />}
    </div>
  );
};

export default Header;
