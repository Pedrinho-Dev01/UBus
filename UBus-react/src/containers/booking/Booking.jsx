import React from 'react';
import './booking.css';

const Booking = () => {
  return (
    <div className='booking-container'>
      <div className='booking-form'>
        <div className='booking-from-to'>
          Pick-up: 
          <input className='booking-fillBox'>

          </input>
        </div>
        <div className='booking-from-to'>
          Drop-off: 
          <input className='booking-fillBox'>

          </input>
        </div>
      </div>
      <div className="UBus__header-content__input">
          <button className="book-button" type="button">Book</button>
        </div>
    </div>
  )
}

export default Booking