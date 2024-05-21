import React, { useState, useEffect } from 'react';
import masterbakelogo from '../imgs/masterbakelogo.png';
import axios from 'axios';
import '../css/nav.css';

export const Nav = ({ isAuth, username, userPhoto }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown-button') && !event.target.closest('.dropdown')) {
        setDropdownOpen(false);
      }
    };

    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const logout = async () => {
    try {
      await axios.post('http://localhost:8000/api/logout/', {
        refresh_token: localStorage.getItem('refresh_token')
      }, {
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`
        },
      });

      localStorage.clear();
      axios.defaults.headers.common['Authorization'] = null;
      window.location.href = '/';
    } catch (e) {
      console.error('Logout not working', e);
    }
  };

  return (
    <>
      <div className='logo-container'>
        <a href="/" className="logo-link">
          <img src={masterbakelogo} alt="MasterBakeoriginallogo" className="logo" />
        </a>
      </div>
      <nav>
        <div className="navbar">
          <div className="navbar-container">
            <ul>
              <li><a href="/" className="active">HOME</a></li>
              <li><a href="/">ABOUT US</a></li>
              <li><a href="/">OUR PRODUCTS</a></li>
            </ul>
          </div>
          {isAuth ? (
            <div className="user-info">
              <img src={userPhoto} alt="User Photo" />
              <span className="username">{username}</span>
              <button className="dropdown-button" onClick={toggleDropdown} aria-haspopup="true" aria-expanded={dropdownOpen ? 'true' : 'false'}>
                ▼
              </button>
              {dropdownOpen && (
                <div className="dropdown" id="dropdownMenu">
                  <button onClick={logout}>Logout</button>
                </div>
              )}
            </div>
          ) : (
            <div className="login-container">
              <a href="/login" className="login-button">
                Login
              </a>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};
