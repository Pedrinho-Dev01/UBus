import React from 'react';
import '../App.css'
import './pages.css'

import { Footer, Header, MapView } from '../containers';
import { Navbar, UserNavbar } from '../components';

const Home = () => {

  //get login status
  const login = JSON.parse(localStorage.getItem('login'));
  console.log('Login Status:',login);

  return (
    <>
    {/*Navbar + Header*/}
    <div className='gradient__bg'>
      {login ? <UserNavbar /> : <Navbar />}
      <Header />
    </div>
    {/*Navbar + Header*/}

    {/*Page Specific Components*/}
    <div className='page-content'>
        <MapView/>
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

export default Home;