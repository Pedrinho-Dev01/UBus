import React from 'react';
import '../App.css'
import './pages.css'

import { Footer } from '../containers';
import { Navbar } from '../components';

const SignUpPage = () => {
    return (
      <>
      {/*Navbar + Header*/}
      <div className='gradient__bg'>
          <Navbar/>
      </div>
      {/*Navbar + Header*/}
  
      {/*Page Specific Components*/}
      <div className='page-content'>
          <h1>Sign Up Page Content</h1>
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

export default SignUpPage;