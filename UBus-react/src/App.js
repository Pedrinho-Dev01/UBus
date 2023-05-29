import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';

//pages
import Home from './pages/Home'
import SignUpPage from './pages/SignUp'
import AccountPage from './pages/AccountPage';
import ActivityPage from './pages/AcitivyPage';

const App = () => {
  return (
    <div className='App'>
        <HashRouter>
          <Routes>
            <Route index element={<Home/>}/>
            <Route path='/sign-up' element={<SignUpPage/>}/>
            <Route path='/activity' element={<ActivityPage/>}/>
            <Route path='/account' element={<AccountPage/>}/>
          </Routes>
        </HashRouter>
    </div>
  )
}

export default App