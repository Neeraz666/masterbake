import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
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
      const refreshToken = localStorage.getItem('refresh_token');
      const accessToken = localStorage.getItem('access_token');

      if (!accessToken || !refreshToken) {
        throw new Error('Tokens are missing');
      }

      await axios.post('http://localhost:8000/api/logout/', {
        refresh_token: refreshToken
      }, {
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
      });

      localStorage.clear();
      axios.defaults.headers.common['Authorization'] = null;
      window.location.href = '/';
    } catch (e) {
      console.error('Logout not working', e);
      if (e.response && e.response.status === 401) {
        // Handle unauthorized error, possibly refresh the token or ask user to login again
        alert('Session expired. Please login again.');
        localStorage.clear();
        window.location.href = '/login';
      }
    }
  };

  return (
    <div className='navcss'>
      <div className='logo-container'>
        <a href="/" className="logo-link">
          <img src={masterbakelogo} alt="MasterBakeoriginal logo" className="logo" />
        </a>
      </div>
      <nav>
        <div className="navbar">
          <div className="navbar-container">
            <ul>
              <li><Link to="/">HOME</Link></li>
              <li><Link to="/about">ABOUT US</Link></li> {/* Use Link component for navigation */}
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
              <Link to="/login" className="login-button"> {/* Use Link component for login */}
                Login
              </Link>
            </div>
          )}
        </div>
      </nav>
      </div>
  );
};
