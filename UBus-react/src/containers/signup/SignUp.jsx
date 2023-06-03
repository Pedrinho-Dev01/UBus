import React, { useState } from 'react';
import { isValidPhoneNumber } from 'libphonenumber-js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../App.css';
import './signup.css';

const SignUp = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneNumberValid, setPhoneNumberValid] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();

    localStorage.setItem('ticketPurchase', JSON.parse(false));

    // Check if all fields are filled
    if (!fullName || !email || !password || !phoneNumber) {
      toast.dismiss();
      toast.error('Please fill in all fields');
      return;
    }

    // Check if email is of acceptable format using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.dismiss();
      toast.error('Please enter a valid email address');
      return;
    }

    // Check if phone number is valid
    if (!isValidPhoneNumber(phoneNumber, 'PT')) {
      setPhoneNumberValid(false);
      toast.dismiss();
      toast.error('Please enter a valid phone number');
      return;
    } else {
      setPhoneNumberValid(true);
    }
    //generate user UBus-ID
    const userUBusID = Math.floor(Math.random() * 100000);

    // Store the input values in local storage
    localStorage.setItem('username', fullName);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    localStorage.setItem('phoneNumber', phoneNumber);
    localStorage.setItem('userUBusID', userUBusID);

    setFullName('');
    setEmail('');
    setPassword('');
    setPhoneNumber('');

    window.location.href = '/UBus';
  };

  return (
    <>
      {/* Page Specific Components */}
      <div className='body'>
        <div className='signup_gradient_bg'>
          <div className="signup_page-content">
            <br />
            <h1 className='signup_gradient__text'>Sign Up</h1>
            <br />
            <form onSubmit={handleSubmit}>
              <div className="signup_signupform-group">
                <input
                  className='signup_signup-input'
                  type="text"
                  placeholder='Full Name'
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div className="signup_form-group">
                <input
                  className='signup_signup-input'
                  type="email"
                  placeholder='Email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="signup_form-group">
                <input
                  className='signup_signup-input'
                  type="password"
                  placeholder='Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="signup_form-group">
                <input
                  className={`signup_signup-input ${phoneNumberValid ? '' : 'invalid-input'}`}
                  type="text"
                  placeholder='Phone Number'
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <button type="submit" className='signup_signupBtn'>Sign Up</button>
            </form>
          </div>
        </div>
      </div>
      {/* Page Specific Components */}
      <ToastContainer />
    </>
  );
};

export default SignUp;