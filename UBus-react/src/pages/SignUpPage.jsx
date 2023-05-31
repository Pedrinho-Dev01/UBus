import React from 'react';
import '../App.css'
import './pages.css'

import { SignUp } from '../containers/';

const SignUpPage = () => {
    return (  
      <>
      {/*Page Specific Components*/}
      <div className='page-content'>
          <SignUp/>
      </div>
      {/*Page Specific Components*/}
      </>
    );
  };

export default SignUpPage;