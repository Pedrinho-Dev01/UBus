import React, { useState } from 'react';
import './bookingForm.css'
import { useNavigate } from 'react-router-dom';

function ModalWindow({ isOpen, onClose, pickAddress, dropAddress }) {
    const navigate = useNavigate();
    const [passengerName, setPassengerName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedHour, setSelectedHour] = useState('');
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  
    const handlePassengerNameChange = (e) => {
      setPassengerName(e.target.value);
    };
  
    const handlePhoneNumberChange = (e) => {
      setPhoneNumber(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
  
    const handleDateChange = (e) => {
      setSelectedDate(e.target.value);
    };
  
    const handleHourChange = (e) => {
      setSelectedHour(e.target.value);
    };
  
    const handlePaymentMethodChange = (e) => {
      setSelectedPaymentMethod(e.target.value);
    };

    const handleBookPay = () => {
        // Validate the form data here
    
        // If the form data is valid, navigate to the confirmation page
        navigate('/ticket', {
          state: {
            passengerName,
            phoneNumber,
            email,
            selectedDate,
            selectedHour,
            selectedPaymentMethod,
            pickAddress,
            dropAddress
          },
        });
      };
  
    if (!isOpen) {
      return null; // Render nothing if the modal is closed
    }
  
    return (
      <div className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <h2>Ticket Details</h2>
            <button className="close-button" onClick={onClose}>
              X
            </button>
          </div>
          <div className="modal-body">
            <label>
              Passenger Name:
              <input
                type="text"
                value={passengerName}
                onChange={handlePassengerNameChange}
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
              />
            </label>
            <label>
              Phone Number (optional):
              <input
                type="tel"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
              />
            </label>
            <label>
              Date:
              <input
                type="date"
                value={selectedDate}
                onChange={handleDateChange}
              />
            </label>
            <label>
              Hour:
              <input
                type="time"
                value={selectedHour}
                onChange={handleHourChange}
              />
            </label>
            <label>
              Payment Method:
              <select
                value={selectedPaymentMethod}
                onChange={handlePaymentMethodChange}
              >
                <option value="">Select payment method</option>
                <option value="paypal">PayPal</option>
                <option value="mbway">MBWay</option>
                <option value="card">Card</option>
              </select>
            </label>
            <br />
            <button onClick={handleBookPay}>Book and Pay</button>
          </div>
        </div>
      </div>
    );
  }
  
  export default ModalWindow;