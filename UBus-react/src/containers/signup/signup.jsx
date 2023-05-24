import React from 'react';
import './signup.css';

const Signup = ({onClose}) => {
  
  const handleClose = () => {
    onClose();
  };

  return (
    <div className="modal-overlay K7__header section__padding">
      <div className="modal-content K7__header-content">
      
      <button className="close-button" onClick={handleClose}>
          X
      </button>

        <h2 className='gradient__text'>Search for More Information</h2>
        <p></p>
        <input id="search-input" type="text" placeholder="Enter your search query" />
        <button type="button" className='signupBtn'>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Signup;