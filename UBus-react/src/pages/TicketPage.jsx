import React from 'react';
import '../App.css'
import './pages.css'

import { Footer, Ticket} from '../containers';

const TicketPage = () => {
  return (
    <>
    <div className='logo-container'>
      <a href='/UBus' className='logo'><h1>UBus</h1></a>
      <p>Ticket delivery page</p>
    </div>
    {/*Page Specific Components*/}
    <div className='page-content' id='ticket-container'>
        <Ticket/>
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

export default TicketPage;