import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom";
import  './Navbar.scss'
import { Sidebar } from './Sidebar';
export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [username, setUsername] = useState('');
  const [isSidebar, setIsSidebar] = useState(false);

  useEffect(() => {
    // Retrieve username from local storage
    const storedUser = JSON.parse(window.localStorage.getItem("user"));
    if (storedUser && storedUser.username) {
      setUsername(storedUser.username); // Set only the username
    }
  }, []);
  const toggleMenu = () => {
    setShowMenu(prevShowMenu => !prevShowMenu);
};

  const closeMenu = () => {
    setShowMenu(false);
  };
  return (
    <>
    <div className='navbar'>
        <span><Link to='/' className='home-link'>Menswear</Link></span>
        <div className='right-container'>
          {!showMenu && (
          <div className='menu-toggle' onClick={toggleMenu}>
            <i className="fa-solid fa-bars"></i>
          </div>
          )}
          <ul className={`menu ${showMenu ? 'show':''}`}>
            <li onClick={closeMenu}>Home</li>
            <li onClick={closeMenu}><Link to='/product'  className='nav-links'>Product</Link></li>
            <li onClick={closeMenu}>About</li>
          </ul>
          {showMenu && (
          <div className='close-button' onClick={closeMenu}>
            <i className="fa-solid fa-xmark"></i>
          </div> 
          )
          }
        <div className='search-profile'>
            <div className='searchbar'>
              <input type='text'></input>
            </div>
            <div className='profile'>
              {username ? (
                <div>
                  <div onClick={() => setIsSidebar(true)}>
                    <i class="fa-solid fa-image-portrait"></i>
                    {username && <span className='username-highlight'>{username}</span>}
                  </div>
                </div>
              ) : (
                <Link to='/login' className='link'>
                  <i class="fa-solid fa-user"></i>
                </Link>
              )}
              {isSidebar && <Sidebar isSidebar={isSidebar} setIsSidebar={setIsSidebar} />}
            </div>
        </div>
        </div>
    </div>
    </>
      
  )
}
