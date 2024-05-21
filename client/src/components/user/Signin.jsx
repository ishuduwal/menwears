import React, { useState } from 'react'
import './User.scss';
import { Link } from "react-router-dom";
import login from '../../assets/login.png';
import { Login } from '../function/User';
export const Signin = () => {
  const [user, setUser] = useState({
    email: "",
    password:""
  })

  const handleChange = e => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]:value
  })
  }
  const LoginHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await Login(user);
      localStorage.setItem('user', JSON.stringify(user));
      window.localStorage.setItem("isAdmin", res.isAdmin);
      window.location.reload();
    } catch (error) {
      console.log("login failed");
    }
  }
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
            <input type='email' name='email' value={user.email} onChange={handleChange} />
        </div>
        <div className='inputbox'>
            <label>Password</label>
            <input type='password' name='password' value={user.password} onChange={handleChange} required='required' />
        </div>
        <div className='button-login'>
            <button onClick={(e)=> LoginHandler(e)}>Login</button>
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
