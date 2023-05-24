import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine, RiUnderline } from 'react-icons/ri';
import './navbar.css';

const Menu = () => (
  <>
  <p><a href='/'>Service</a></p>
  <p><a href='/activity'>Activity</a></p>
  <p><a href='/account'>Account</a></p>
  </>
)

const SignInModal = ({ closeModal }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setUsername('');
    setPassword('');
    closeModal();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-modal" onClick={closeModal}>
          X
        </button>
        <h2>Sign In</h2>        
        <form onSubmit={handleSubmit} className='separator'>
          <input
            type="text"
            placeholder='Email or Phone Number'
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder='Password'
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <h5 id='extra-signin'>
              Don't have an account? <a href="/sign-up"><u>Sign Up</u></a> 
          </h5>
          <button type="submit" className='signin-btn'>Sign In</button>
        </form>
      </div>
    </div>
  );
};


const Navbar = () => {
  // Add state for toggleMenu and signInModal
  const [toggleMenu, setToggleMenu] = useState(false);
  const [signInModalOpen, setSignInModalOpen] = useState(false);

  // Function to open the sign-in modal
  const openSignInModal = () => {
    setSignInModalOpen(true);
  };

  // Function to close the sign-in modal
  const closeSignInModal = () => {
    setSignInModalOpen(false);
  };

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
      <div className="K7__navbar-sign">
        <a href="#" onClick={openSignInModal}>
          <p>Sign in</p>
        </a>
        <a href="/sign-up"> 
          <button type="button">Sign up</button>
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
                <a href='/sign-in'><p>Sign in</p></a>
                <a href='/sign-up'><button type='button'>Sign up</button></a>
              </div>
            </div>
          </div>
        )}
      </div>
      {signInModalOpen && <SignInModal closeModal={closeSignInModal} />}
    </div>
  )
}

export default Navbar