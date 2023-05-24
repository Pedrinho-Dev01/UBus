import React from 'react';
import '../App.css';
import './pages.css';

import { Footer } from '../containers';
import { Navbar } from '../components';

const SignUpPage = () => {
  return (
    <>
      {/* Navbar + Header */}
      <div className="gradient__bg">
        <Navbar />
      </div>
      {/* Navbar + Header */}

      {/* Page Specific Components */}
      <div className="page-content">
        <h1 className='gradient__text'>Sign Up</h1>
        <form>
          <div className="form-group">
            <input className='signup-input' type="text" placeholder='Full Name'/>
          </div>
          <div className="form-group">
            <input className='signup-input' type="email " placeholder='Email'/>
          </div>
          <div className="form-group">
            <input className='signup-input' type="password" placeholder='Password'/>
          </div>
          <div className="form-group">
            <input className='signup-input' type="text" placeholder='Phone Number'/>
          </div>
          <button type="submit" className='signupBtn'>Sign Up</button>
        </form>
      </div>
      {/* Page Specific Components */}

      {/* Footer */}
      <div className="default-bottom">
        <Footer />
      </div>
      {/* Footer */}
    </>
  );
};

export default SignUpPage;
