import React from 'react'
import './User.scss';
import { Link } from "react-router-dom";
export const Signup = () => {
  return (
    <>
    <div className='signup'>
        <div className='inputbox'>
            <label>Email</label>
            <input type='email'/>
        </div>
        <div className='inputbox'>
            <label>Username</label>
            <input type='text'/>
        </div>
        <div className='inputbox'>
            <label>Password</label>
            <input type='password'/>
        </div>
        <div className='inputbox'>
            <label>Mobile Number</label>
            <input type='number'/>
        </div>
        <div className='button-signup'>
            <button>Create An Account</button>
        </div>
        <div className='or'>
            <p>or</p>
        </div>
        <div className='sigup-google'>
            
        </div>
        <div className='p'>
            <p>Already have an account? <Link to='/login'>Log in</Link></p>
        </div>
    </div>
    </>
  )
}
