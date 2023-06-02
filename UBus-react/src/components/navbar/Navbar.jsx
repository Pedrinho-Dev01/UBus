import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';

//tostify - for warning popups
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Menu = () => (
  <>
  <p><a href='#/'>Service</a></p>
  <p><a className='disabled' onClick={notAvailable}>Activity</a></p>
  <p><a className='disabled' onClick={notAvailable}>Account</a></p>
  </>
)

const notAvailable = () => {
  toast.dismiss();
  toast.error('Pick Up or Drop Off missing.', {
    position: 'bottom-center',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
  });
};

// Set login to true
const setLogin = () => {
  localStorage.setItem('login', true);
  const login = localStorage.getItem('login');
  window.location.reload();
  //Debugging
  console.log('Set login:',login);
};

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
          <a href="#/sign-up">Don't have an account? <u>Sign Up</u></a> 
          </h5>
          <button type="submit" className='signin-btn' onClick={setLogin}>Sign In</button>
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
          <a href='#/'><p className='ubus_logo'>UBus</p></a>
        </div>
        <div className='K7__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className="K7__navbar-sign">
        <a onClick={openSignInModal}>
          <p>Sign in</p>
        </a>
        <a href="#/sign-up"> 
          <button type="button" className='navbar-signup'>Sign up</button>
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
                <a onClick={openSignInModal}><p>Sign in</p></a>
                <a href='#/sign-up'><button type='button'>Sign up</button></a>
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