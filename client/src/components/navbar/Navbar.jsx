import React from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom";
import  './Navbar.scss'
export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(prevShowMenu => !prevShowMenu);
};

  const closeMenu = () => {
    setShowMenu(false);
  };
  return (
    <>
    <div className='navbar'>
        <span>Menswear</span>
        <div className='right-container'>
          {!showMenu && (
          <div className='menu-toggle' onClick={toggleMenu}>
            <i className="fa-solid fa-bars"></i>
          </div>
          )}
          <ul className={`menu ${showMenu ? 'show':''}`}>
            <li onClick={closeMenu}>Home</li>
            <li onClick={closeMenu}>Product</li>
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
              <Link to='/login' className='link'>
                <i class="fa-solid fa-user"></i>
              </Link>
            </div>
        </div>
        </div>
    </div>
    </>
      
  )
}
