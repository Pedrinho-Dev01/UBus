import React from 'react';
import '../App.css'

import { Footer, DesignProjects, Possibility, Features, WhatPortfolio, Header, MapView, Booking, Account , SignIn} from '../containers';
import { Navbar, Project } from '../components';

const Home = () => {
  return (
    <>
    {/*Navbar + Header*/}
    <div className='gradient__bg'>
        <Navbar/>
        <Header/>
    </div>
    {/*Navbar + Header*/}

    {/*Page Specific Components*/}
    <div className='page-content'>
        <MapView/>
        <Booking/>
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

export default Home;