import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './userNavbar.css';

const Menu = () => (
  <>
  <p><a href='#/'>Service</a></p>
  <p><a href='#/activity'>Activity</a></p>
  <p><a href='#/account'>Account</a></p>
  </>
)

// Set login to true
const handleLogout = () => {
  localStorage.setItem('login', JSON.parse(false));
  const login = localStorage.getItem('login');

  // Redirect to home page
  window.location.href = '/UBus';
  
  //Debugging
  console.log('Set login:', login);
  console.log('Logout Successful');
};

const UserNavbar = () => {
  // Add state for toggleMenu and signInModal
  const [toggleMenu, setToggleMenu] = useState(false);
  const username = localStorage.getItem('username');

  return (
    <div className="K7__navbar">
      <div className="K7__navbar-links">
        <div className="K7__navbar-links_logo">
          <a href='#/'><p className='ubus_logo'>UBus</p></a>
        </div>
        <div className='K7__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className="K7__navbar-sign">
        <a>
          <p>{username}</p>
        </a>
        <a> 
          <button type="button" className='navbar-logout' onClick={handleLogout}>Logout</button>
        </a>
      </div>
      <div className='K7__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className='K7__navbar-menu_container slide-right'>
            <div className='K7__navbar-menu_container-links'>
              <Menu />
              <div className='K7__navbar-menu_container-links-sign'>
                <a><p style={{ fontWeight: 'bold' }}>{username}</p></a>
                <a onClick={handleLogout}><button type='button' className='navbar-logout'>Logout</button></a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default UserNavbar