import React,{useState} from 'react'
import './User.scss';
import { Link } from "react-router-dom";
import { Register } from '../function/User';
export const Signup = () => {
    const [user, setUser] = useState({
        username: '',
        email: '',
        mobilenumber: '',
        password: ''
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await Register(user);
            if (response) {
                console.log("Account create sucessfully")
                localStorage.setItem('user', JSON.stringify(user));
            }
        } catch (error) {
            console.log(error)
        }
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser({...user,[name]:value})
    }
  return (
    <>
    <div className='signup'>
        <div className='inputbox'>
            <label>Email</label>
            <input type='email' name='email' value={ user.email} onChange={handleInputChange} />
        </div>
        <div className='inputbox'>
            <label>Username</label>
            <input type='text' name='username' value={user.username} onChange={handleInputChange} />
        </div>
        <div className='inputbox'>
            <label>Password</label>
            <input type='password' name='password' value={user.password} onChange={ handleInputChange} />
        </div>
        <div className='inputbox'>
            <label>Mobile Number</label>
            <input type='number' name='mobilenumber' value={user.mobilenumber} onChange={handleInputChange}/>
        </div>
        <div className='button-signup'>
            <button onClick={handleSubmit}>Create An Account</button>
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
