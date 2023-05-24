import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//pages
import Home from './pages/Home'
import SignInPage from './pages/SignIn'
import SignUpPage from './pages/SignUp'

const App = () => {
  return (
    <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home/>}/>
            <Route path='/sign-in' element={<SignInPage/>}/>
            <Route path='/sign-up' element={<SignUpPage/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App