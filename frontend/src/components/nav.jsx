import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import masterbakelogo from '../imgs/masterbakelogo.png';
import axios from 'axios';
import '../css/nav.css';

export const Nav = ({ isAuth, userData }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [catdata, setCatData] = useState([]);

  useEffect(() => {
    console.log('Nav Component userData:', userData);
  }, [userData]);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/product/category');
        setCatData(response.data.results);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };
    fetchData();
  }, []);

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
        alert('Session expired. Please login again.');
        localStorage.clear();
        window.location.href = '/login';
      } else {
        alert('Error during logout. Please try again.');
      }
    }
  };

  return (
    <div className='navcss'>
      <div className='logo-container'>
        <Link to="/" className="logo-link">
          <img src={masterbakelogo} alt="MasterBake original logo" className="logo" />
        </Link>
      </div>
      <nav>
        <div className="navbar">
          <div className="navbar-container">
            <ul>
              <li><Link to="/">HOME</Link></li>
              <li><Link to="/about">ABOUT US</Link></li>
              <li className="products-dropdown">
                <Link to="#">OUR PRODUCTS</Link>
                <ul className="dropdown-menu">
                  {catdata.map((category) => (
                    <li key={category.id}>
                      <Link to={`/products/${category.slug}`}>{category.name}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
          {isAuth ? (
            <div className="user-info">
              {userData.profilephoto && <img src={userData.profilephoto} alt="User's profile" />}
              {userData.username && <span className="username">{userData.firstname}</span>}
              <button
                className="dropdown-button"
                onClick={toggleDropdown}
                aria-haspopup="true"
                aria-expanded={dropdownOpen ? 'true' : 'false'}
              >
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
              <Link to="/login" className="login-button">
                Login
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};
