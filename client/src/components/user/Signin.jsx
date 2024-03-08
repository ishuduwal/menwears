import React from 'react'
import './User.scss';
import { Link } from "react-router-dom";
import login from '../../assets/login.png';
export const Signin = () => {
  return (
    <>
    <div className='login'>
      <div className='left-container'>
        <img src={login}/>
      </div>
      <div className='right-container'>
        <h1>Welcome Back</h1>
        <p>Please login iwth your personal information by email address and password.</p>
        <div className='inputbox'>
            <label>Email</label>
            <input type='email'/>
        </div>
        <div className='inputbox'>
            <label>Password</label>
            <input type='password'/>
        </div>
        <div className='button-login'>
            <button>Login</button>
        </div>
        <div className='or'>
            <p>or</p>
        </div>
        <div className='sigin-google'>
            
        </div>
        <div className='p'>
            <p>Don't have an account? <Link to='/signup'>Signup</Link></p>
        </div>
      </div>
    </div>
    </>
      
  )
}
