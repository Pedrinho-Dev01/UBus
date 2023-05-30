import React, { useState } from 'react';
import './ticket.css';
import homePage from '../../assets/homeIMG.jpg';
import Search from '../search/search';

import { useLocation } from 'react-router-dom';

function Ticket() {
  const location = useLocation();
  const { passengerName, phoneNumber, selectedDate, selectedHour, selectedPaymentMethod } = location.state;

  return (
    <div>
      <h2>Confirmation Page</h2>
      <p>Passenger Name: {passengerName}</p>
      <p>Phone Number: {phoneNumber}</p>
      <p>Date: {selectedDate}</p>
      <p>Hour: {selectedHour}</p>
      <p>Payment Method: {selectedPaymentMethod}</p>
    </div>
  );
}

export default Ticket;