import React from 'react';
import '../App.css'

import { Footer, TicketList} from '../containers';
import { Navbar, UserNavbar } from '../components';

const ActivityPage = () => {

  //get login status
  const login = JSON.parse(localStorage.getItem('login'));


    return (
      <>
      {/*Navbar + Header*/}
      <div className='gradient__bg'>
          {login ? <UserNavbar /> : <Navbar />}
      </div>
      {/*Navbar + Header*/}
  
      {/*Page Specific Components*/}
      <div className='page-content'>
          <TicketList />
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