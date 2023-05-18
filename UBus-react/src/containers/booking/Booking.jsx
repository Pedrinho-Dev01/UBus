import React from 'react';
import './booking.css';

const Booking = () => {
  return (
    <div className='booking-container'>
      <div>
        
      </div>
      <div className='booking-form'>
        <div className='booking-from-to'>
          <p className='align_a'>Pick Up:</p>
          <input className='booking-fillBox' list='pick_up'>

          </input>
        </div>
        <br></br>
        <div className='booking-from-to'>
          <p className='align_a'>Drop Off:</p>
          <input className='booking-fillBox'>
            
          </input>
        </div>
      </div>
      <button className="book-button" type="button">Book</button>
    </div>
  )
}

export default Booking

