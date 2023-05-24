import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';

const Menu = () => (
  <>
  <p><a href='/'>Home</a></p>
  <p><a href='#Service-map'>Service</a></p>
  <p><a href='#activity-section'>Activity</a></p>
  <p><a href='#account-section'>Account</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="K7__navbar">
      <div className="K7__navbar-links">
        <div className="K7__navbar-links_logo">
          <a href='/'><p className='ubus_logo'>UBus</p></a>
        </div>
        <div className='K7__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='K7__navbar-sign'>
        <a href='sign-in'><p>Sign in</p></a>
        <a href='/sign-up'><button type='button'>Sign up</button></a>
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
                <a href='/sign-in'><p>Sign in</p></a>
                <a href='/sign-up'><button type='button'>Sign up</button></a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar