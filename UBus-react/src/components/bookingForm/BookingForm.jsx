import React, { useState } from 'react';
import './bookingForm.css';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { isValidPhoneNumber } from 'libphonenumber-js';

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

  const validatePhoneNumber = (number) => {
    return isValidPhoneNumber(number, 'PT');
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // basic email validation
    return emailRegex.test(email);
  };

  const isFutureDateTime = (date, time) => {
    const selectedDateTime = new Date(`${date}T${time}`);
    const currentDateTime = new Date();

    return selectedDateTime > currentDateTime;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Check if the form/search is incomplete
    const isFormIncomplete =
      !passengerName ||
      !email ||
      !selectedDate ||
      !selectedHour ||
      !selectedPaymentMethod;
    const isSearchIncomplete = pickAddress === '' || dropAddress === '';

    //ticket emitted
    localStorage.setItem('ticketPurchase', JSON.stringify(true));

    if (isSearchIncomplete) {
      toast.dismiss();
      toast.error('Pick Up or Drop Off missing or Incorrect.', {
        position: 'bottom-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      });
    } else if (isFormIncomplete) {
      toast.dismiss();
      toast.error('Form is incomplete. Please fill in all required fields.', {
        position: 'bottom-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      });
    } else if (!validatePhoneNumber(phoneNumber)) {
      toast.dismiss();
      toast.error('Invalid phone number. Please enter a valid phone number.', {
        position: 'bottom-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      });
    } else if (!validateEmail(email)) {
      toast.dismiss();
      toast.error('Invalid email address. Please enter a valid email address.', {
        position: 'bottom-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      });
    } else if (!isFutureDateTime(selectedDate, selectedHour)) {
      toast.dismiss();
      toast.error('Selected date and time must be in the future.', {
        position: 'bottom-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      });
    } else {
      // Proceed with form submission
      console.log('Booking Success!');

      // Save ticket details to local storage
      localStorage.setItem('passengerName', passengerName);
      localStorage.setItem('phoneNumber', phoneNumber);
      localStorage.setItem('email', email);
      localStorage.setItem('selectedDate', selectedDate);
      localStorage.setItem('selectedHour', selectedHour);
      localStorage.setItem('selectedPaymentMethod', selectedPaymentMethod);
      localStorage.setItem('pickAddress', pickAddress);
      localStorage.setItem('dropAddress', dropAddress);

      // Redirect to ticket delivery page
      navigate('/ticket', {
        state: {
          passengerName,
          phoneNumber,
          email,
          selectedDate,
          selectedHour,
          selectedPaymentMethod,
          pickAddress,
          dropAddress,
        },
      });
    }
  };

  const handleMapView = () => {
    // close the modal search window and scroll down to the map
    onClose();
    document.getElementById('Service-map').scrollIntoView({ behavior: 'smooth' });
  };

  if (!isOpen) {
    return null; // Render nothing if the modal is closed
  }

  return (
    <div className="booking-modal">
      <div className="booking-modal-content">
        <div className="booking-modal-header">
          <h2>Ticket Details</h2>
          <button className="booking-close-button" onClick={onClose}>
            X
          </button>
        </div>
        <div className="booking-modal-body">
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
            <input type="email" value={email} onChange={handleEmailChange} />
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
              min={new Date().toISOString().split('T')[0]} // Set min date to current date
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
          <p onClick={handleMapView} id="view-map">
            <p>See Pick-up and Drop-off on map</p>
          </p>
          <button onClick={handleFormSubmit} type="submit">
            Book and Pay
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default ModalWindow;