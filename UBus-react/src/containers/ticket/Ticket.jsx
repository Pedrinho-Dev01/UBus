import './ticket.css';
import { useLocation } from 'react-router-dom';

function Ticket() {
  const location = useLocation();
  const { passengerName, phoneNumber, selectedDate, selectedHour, selectedPaymentMethod, pickAddress, dropAddress } = location.state;

  const ticketID = Math.floor(Math.random() * 1000000) + 1;
  const bookingID = Math.floor(Math.random() * 1000000000000) + 1;

  return (
    <div>
      <h2>Confirmation Page</h2>
      <p>Ticket Number: {ticketID}</p>
      <p>Booking ID: {bookingID}</p>
      <p>Passenger Name: {passengerName}</p>
      <p>Phone Number: {phoneNumber}</p>
      <p>Date: {selectedDate}</p>
      <p>Hour: {selectedHour}</p>
      <p>Payment Method: {selectedPaymentMethod}</p>
      <p>Pick-up: {pickAddress} </p>
      <p>Drop-off: {dropAddress} </p>
      
    </div>
  );
}

export default Ticket;