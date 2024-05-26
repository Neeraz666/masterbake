import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Nav } from './components/nav';
import { Home } from './components/home';
import { Footer } from './components/footer';
import { Login } from './components/login';
import { About } from './components/about';
import { Category } from './components/category';
import { Product } from './components/product';

import './App.css';
import axios from 'axios';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const accessToken = localStorage.getItem('access_token');
    if (accessToken) {
      setIsAuth(true);
    }
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      const accessToken = localStorage.getItem('access_token');
      if (!accessToken) {
        console.error('Access token is missing');
        return;
      }

      try {
        console.log('Fetching user data...');
        const response = await axios.get('http://localhost:8000/api/users/listuser', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        console.log('User data fetched:', response.data);
        if (response.data.results.length > 0) {
          setUserData(response.data.results[0]);
        }
      } catch (error) {
        console.error('Error fetching user data: ', error);
        if (error.response && error.response.status === 401) {
          alert('Session expired. Please login again.');
          localStorage.clear();
          setIsAuth(false);
          window.location.href = '/login';
        }
      }
    };

    if (isAuth) {
      fetchUserData();
    }
  }, [isAuth]);

  return (
    <BrowserRouter>
      <Nav isAuth={isAuth} userData={userData} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='products' element={<Category />} />
        <Route path='products/:categoryName' element={<Category />} />
        <Route path='products/:categoryName/:productSlug' element={<Product />} />
        <Route path='login' element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
