import React, { useState } from 'react';
import './bookingForm.css'
import { useNavigate } from 'react-router-dom';

//tostify - for warning popups
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

    const handleFormSubmit = (e) => {
      e.preventDefault();
  
      // Check if the form/search is incomplete
      const isFormIncomplete = !passengerName || !email || !selectedDate || !selectedHour || !selectedPaymentMethod;
      const isSearchIncomplete =  pickAddress==='' || dropAddress==='';
      console.log("pick:", pickAddress)
  
      if (isSearchIncomplete){
        toast.dismiss();
        toast.error('Pick Up or Drop Off missing.', {
          position: 'bottom-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
        });
      }
      else if (isFormIncomplete) {
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
      } else {
        // Proceed with form submission
        console.log("Booking Success!")
        //Redirect to ticket delivery page
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
            <p onClick={handleMapView} id='view-map'><p>See Pick-up and Drop-off on map</p></p>
            <button onClick={handleFormSubmit} type='submit'>Book and Pay</button>
          </div>
        </div>
        <ToastContainer />
      </div>
    );
  }
  
  export default ModalWindow;