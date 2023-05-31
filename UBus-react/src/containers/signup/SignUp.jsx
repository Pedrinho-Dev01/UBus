import React from 'react';
import '../../App.css';
import './signup.css';

const SignUp = () => {
  return (
    <>
      {/* Page Specific Components */}
      <div className='body'>
        <div className='signup_gradient_bg'>
        <div className="signup_page-content">
          <br></br>
          <h1 className='signup_gradient__text'>Sign Up</h1>
          <br></br>
          <form>
            <div className="signup_signupform-group">
              <input className='signup_signup-input' type="text" placeholder='Full Name'/>
            </div>
            <div className="signup_form-group">
              <input className='signup_signup-input' type="email " placeholder='Email'/>
            </div>
            <div className="signup_form-group">
              <input className='signup_signup-input' type="password" placeholder='Password'/>
            </div>
            <div className="signup_form-group">
              <input className='signup_signup-input' type="text" placeholder='Phone Number'/>
            </div>
            <button type="submit" className='signup_signupBtn'>Sign Up</button>
          </form>
        </div>
        </div>
      </div>
      {/* Page Specific Components */}
    </>
  );
};

export default SignUp;
