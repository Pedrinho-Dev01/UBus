import React from 'react';
import './header.css';
import homePage from '../../assets/homeIMG.jpg'

const Header = () => {
  return (
    <div className='K7__header section__padding' id='home'>
      <div className='K7__header-content'>
        <h1 className='gradient__text'>UBus</h1>
        <h1 className='gradient__text' id='slogan'>Smart Mobility Made Simple</h1>
        <p>Search for Real-time information on our routes and buses.</p>

        <div className="K7__header-content__input">
        <button type="button"><a href='#contacts'>Search</a></button>
        </div>
      </div>

      <div className='K7__header-img'>
        <img src={homePage} alt='Front Page'/>
      </div>
    </div>
  )
}

export default Header