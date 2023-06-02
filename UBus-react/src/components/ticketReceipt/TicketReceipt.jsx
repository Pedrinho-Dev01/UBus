import React from 'react';
import './ticketReceipt.css';

const TicketReceipt = () => {

  //get local ticket data from local storage
  const ticketID = localStorage.getItem('ticketID');
  const bookingID = localStorage.getItem('bookingID');
  const pickAddress = localStorage.getItem('pickAddress');
  const dropAddress = localStorage.getItem('dropAddress');
  const selectedDate = localStorage.getItem('selectedDate');
  const selectedHour = localStorage.getItem('selectedHour');
  const passengerName = localStorage.getItem('passengerName');
  const selectedPaymentMethod = localStorage.getItem('selectedPaymentMethod');

  const cancelTicket = () => {
    localStorage.setItem('ticketPurchase', JSON.parse(false));
    const ticketPurchase = localStorage.getItem('ticketPurchase');
    console.log('TICKET PURCHASE STATUS:', JSON.parse(ticketPurchase));
    window.location.reload();
  }

  return (
    <div className='ticket-receipt'>
      <div style={{marginTop:'25px', marginBottom:'25px'}}>
        <h2>• Ticket Details •</h2>
        <p className="ticket-info" id='purchase-info'>Ticket Number: {ticketID} | Booking ID: {bookingID} </p>
        <div className='line'><p className='bold'>Pick Up:</p><p className='info'>{pickAddress}</p></div>
        <div className='line'><p className='bold'>Drop Off:</p><p className='info'>{dropAddress}</p></div>
        <div className='line'><p className='bold'>Ticket schedule:</p><p className='info'>{selectedDate} | {selectedHour}</p></div>
        <div className='line'><p className='bold'>Passenger Name:</p><p className='info'>{passengerName}</p></div>
        <div className='line'><p className='bold'>Payment Method:</p><p className='info'>{selectedPaymentMethod}</p></div>
        <button className='cancel-ticket' onClick={cancelTicket}>Cancel Ticket</button>
      </div>
    </div>
  )
}

export default TicketReceipt