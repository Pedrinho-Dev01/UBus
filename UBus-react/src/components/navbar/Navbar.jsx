import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import { toast } from 'react-toastify';

const Menu = () => (
  <>
  <p><a href='#home'>Home</a></p>
  <p><a href='#Service-map'>Service</a></p>
  <p><a href='#activity-section'>Activity</a></p>
  <p><a href='#home'>Account</a></p>
  </>
)

function linkError() {
  toast.error('Feature not available! ', {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    theme: "dark",
  });
}

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="K7__navbar">
      <div className="K7__navbar-links">
        <div className="K7__navbar-links_logo">
          <p className='ubus_logo'>UBus</p>
        </div>
        <div className='K7__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='K7__navbar-sign'>
        <p onClick={() => {linkError()}}>Sign in</p>
        <button type='button' onClick={() => {linkError()}}>Sign up</button>
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
                <p>Sign in</p>
                <button type='button'>Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar