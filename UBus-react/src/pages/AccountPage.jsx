import React from 'react';
import '../App.css'

import { Footer, Account } from '../containers';
import { Navbar } from '../components';

const AccountPage = () => {
    return (
      <>
      {/*Navbar + Header*/}
      <div className='gradient__bg'>
          <Navbar/>
      </div>
      {/*Navbar + Header*/}
  
      {/*Page Specific Components*/}
      <div className='page-content'>
          <Account/>
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

export default AccountPage;