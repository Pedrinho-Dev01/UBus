import React from 'react';
import '../App.css'

import { Footer, Account } from '../containers';
import { Navbar, UserNavbar } from '../components';

const ActivityPage = () => {

  //get login status
  const login = localStorage.getItem('login');

    return (
      <>
      {/*Navbar + Header*/}
      <div className='gradient__bg'>
          {login ? <UserNavbar /> : <Navbar />}
      </div>
      {/*Navbar + Header*/}
  
      {/*Page Specific Components*/}
      <div className='page-content'>
          <h1>This Page is not available yet</h1>
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

export default ActivityPage;