import React, { useState } from 'react'
import './User.scss';
import { Link } from "react-router-dom";
import login from '../../assets/login.png';
import { Login } from '../api/User.js';
export const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const user = { email, password };
      const data = await Login(user);
      console.log('Login successful:', data);
      localStorage.setItem('user', JSON.stringify(user));
    } catch (error) {
      console.error('Login error:', error);
    }
  };

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
            <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='inputbox'>
            <label>Password</label>
            <input type='password'  value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className='button-login'>
            <button onClick={handleLogin}>Login</button>
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
