import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Menu = () => (
  <>
    <p>
      <a href="#/">Service</a>
    </p>
    <p>
      <a className="disabled" onClick={notAvailable}>
        Activity
      </a>
    </p>
    <p>
      <a className="disabled" onClick={notAvailable}>
        Account
      </a>
    </p>
  </>
);

const notAvailable = () => {
  toast.dismiss();
  toast.error('Sign In to Access', {
    position: 'bottom-center',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
  });
};

const setLogin = () => {
  localStorage.setItem('login', true);
  const login = localStorage.getItem('login');
  window.location.reload();
  // Debugging
  console.log('Set login:', login);
};

const SignInModal = ({ closeModal }) => {
  const [userCheck, setUserCheck] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');

  // Get local storage credentials
  const LocalEmail = localStorage.getItem('email');
  const LocalPhone = localStorage.getItem('phoneNumber');
  const LocalPassword = localStorage.getItem('password');

  const handleSubmit = (event) => {
    event.preventDefault();

    if ((userCheck.toLowerCase() === LocalEmail.toLowerCase() || userCheck === LocalPhone) && passwordCheck === LocalPassword) {
      setLogin();
      setUserCheck('');
      setPasswordCheck('');
      closeModal();

      toast.dismiss();
      toast.success('Login Successful!', {
        position: 'bottom-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      });
    } else {
      setUserCheck('');
      setPasswordCheck('');

      toast.dismiss();
      toast.error('Incorrect Username or Password.', {
        position: 'bottom-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      });
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-modal" onClick={closeModal}>
          X
        </button>
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit} className="separator">
          <input
            type="text"
            placeholder="Email or Phone Number"
            id="username"
            value={userCheck}
            onChange={(e) => setUserCheck(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            id="password"
            value={passwordCheck}
            onChange={(e) => setPasswordCheck(e.target.value)}
          />
          <h5 id="extra-signin">
            <a href="#/sign-up">
              Don't have an account? <u>Sign Up</u>
            </a>
          </h5>
          <button type="submit" className="signin-btn">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [signInModalOpen, setSignInModalOpen] = useState(false);

  const openSignInModal = () => {
    setSignInModalOpen(true);
  };

  const closeSignInModal = () => {
    setSignInModalOpen(false);
  };

  return (
    <div className="K7__navbar">
      <div className="K7__navbar-links">
        <div className="K7__navbar-links_logo">
          <a href="#/">
            <p className="ubus_logo">UBus</p>
          </a>
        </div>
        <div className="K7__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="K7__navbar-sign">
        <a onClick={openSignInModal}>
          <p>Sign in</p>
        </a>
        <a href="#/sign-up">
          <button type="button" className="navbar-signup">
            Sign up
          </button>
        </a>
      </div>
      <div className="K7__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
        ) : (
          <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <div className="K7__navbar-menu_container slide-right">
            <div className="K7__navbar-menu_container-links">
              <Menu />
              <div className="K7__navbar-menu_container-links-sign">
                <a onClick={openSignInModal}>
                  <p>Sign in</p>
                </a>
                <a href="#/sign-up">
                  <button type="button">Sign up</button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
      {signInModalOpen && <SignInModal closeModal={closeSignInModal} />}
      <ToastContainer />
    </div>
  );
};

export default Navbar;