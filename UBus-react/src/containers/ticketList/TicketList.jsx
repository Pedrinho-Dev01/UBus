import React from 'react';
import './ticketList.css';
import { TicketReceipt } from '../../components';

const TicketList = () => {
  const ticketPurchase = localStorage.getItem('ticketPurchase');
  const ticket = JSON.parse(ticketPurchase);

  return (
    <div className='K7__projects'>
      <div className='K7__projects-heading'>
        <h1 className='gradient__text'>Purchased Tickets</h1>
      </div>
      <div className='K7__projects-container'>
        <div className='K7__projects-container_groupA'>
          {ticket ? <TicketReceipt /> : null}
        </div>
      </div>
    </div>
  );
};

export default TicketList;