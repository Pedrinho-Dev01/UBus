import React from 'react';
import '../App.css'

import { Footer, Header, MapView, Ticket} from '../containers';
import { Navbar } from '../components';

const TicketPage = () => {
  return (
    <>
    {/*Navbar + Header*/}
    <div className='gradient__bg'>
        <Navbar/>
    </div>
    {/*Navbar + Header*/}

    {/*Page Specific Components*/}
    <div className='page-content'>
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