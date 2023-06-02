import './ticket.css';
import { useLocation } from 'react-router-dom';
import QRCode from '../../assets/QR code.png';

function Ticket() {
  const location = useLocation();
  const { passengerName, phoneNumber, email, selectedDate, selectedHour, selectedPaymentMethod, pickAddress, dropAddress } = location.state;

  const ticketID = Math.floor(Math.random() * 1000000) + 1;
  const bookingID = Math.floor(Math.random() * 1000000000000) + 1;

  //save ticket details to local storage
  localStorage.setItem('ticketID', ticketID);
  localStorage.setItem('bookingID', bookingID);

  const getCurrentDateTime = () => {
    const currentDate = new Date();
    const dateAndTime = currentDate.toLocaleString();
    return dateAndTime;
  };

  return (
    <div className="ticket-container">
      <h2>• Ticket Details •</h2>
      <p className="ticket-info" id='purchase-info'>Ticket Number: {ticketID} | Booking ID: {bookingID} | {getCurrentDateTime()}</p>
      
      <div className='line'><p className='bold'>Pick Up:</p><p className='info'>{pickAddress}</p></div>
      <div className='line'><p className='bold'>Drop Off:</p><p className='info'>{dropAddress}</p></div>
      <div className='line'><p className='bold'>Ticket schedule:</p><p className='info'>{selectedDate} | {selectedHour}</p></div>
      <div className='line'><p className='bold'>Passenger Name:</p><p className='info'>{passengerName}</p></div>
      <div className='line'><p className='bold'>Email:</p><p className='info'>{email}</p></div>
      <div className='line'><p className='bold'>Phone:</p><p className='info'>{phoneNumber}</p></div>
      <div className='line'><p className='bold'>Payment Method:</p><p className='info'>{selectedPaymentMethod}</p></div>
      
      <img src={QRCode} className='ticket-qr' alt='QR code ticket'/>
      <p className='warning'>UBus is not responsible for any missed trips due to non-compliance with the recommended trip plan or tardiness to the pick-up zone, and there will be no refunds issued in these cases. Please plan your trip carefully and arrive at the pick-up zone in a timely manner to ensure a smooth and satisfactory travel experience with UBus.</p>
    </div>
  );
}

export default Ticket;
