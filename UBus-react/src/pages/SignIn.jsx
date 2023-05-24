import React from 'react';
import '../App.css'
import './pages.css'

import { Footer } from '../containers';
import { Navbar } from '../components';

const SignInPage = () => {
    return (
      <>
      {/*Navbar + Header*/}
      <div className='gradient__bg'>
          <Navbar/>
      </div>
      {/*Navbar + Header*/}
  
      {/*Page Specific Components*/}
      <div className='modal-content gradient__bg'>
          <input type="text" placeholder="Username" className='signin-input'/>
          <input type="password" placeholder="Password" className='signin-input'/>
          <button className='signin-btn'>Sign In</button>
      </div>
      {/*Page Specific Components*/}
  
      {/*Footer*/}
      <div className='default-bottom'>
          <Footer/>
      </div>
      {/*Footer*/}
      </>
    );
  };

export default SignInPage;