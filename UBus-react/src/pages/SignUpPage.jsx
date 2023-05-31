import React from 'react';
import '../App.css'
import './pages.css'
import './signup.css'

import { SignUp } from '../containers/';

const SignUpPage = () => {
    return (  
      <body className='signUpPage'>
        <>
        {/*Page Specific Components*/}
        <div className='page-content'>
          <SignUp/>
        </div>
        {/*Page Specific Components*/}
        </>
      </body>
    );
  };

export default SignUpPage;