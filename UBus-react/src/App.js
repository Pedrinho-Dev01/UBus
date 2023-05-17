import React, { useState } from 'react'

import { Footer, DesignProjects, Possibility, Features, WhatPortfolio, Header, MapView } from './containers';
import { Navbar } from './components';
import './App.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [latitude, setLatitude] = React.useState('');
  const [longitude, setLongitude] = React.useState('');

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude)
      setLongitude(position.coords.longitude)
    })
  })

  const [viewPort, setViewPort] = useState({
    latitude: 49,
    longitude: -8,
    zoom: 5,
  });

  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <MapView />
      <Footer />
      <ToastContainer
      position="bottom-center"
      autoClose={1500}
      hideProgressBar
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss={false}
      draggable={false}
      pauseOnHover
      theme="dark"
      limit={1}
      />
    </div>
  )
}

export default App