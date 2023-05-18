import React from 'react';
import './booking.css';

const Booking = () => {
  return (
    <div className='booking-container'>
      <div>
        
      </div>
      <div className='booking-form'>
        <div className='booking-from-to'>
          <span className='small_margin'>Pick Up:</span>
          <input className='booking-fillBox'></input>
        </div>
        <div className='booking-from-to'>
          <span className='small_margin'>Drop Off:</span>
          <input className='booking-fillBox'></input>
        </div>
      </div>
      <button className="book-button" type="button">Book</button>
    </div>
  )
}

export default Booking