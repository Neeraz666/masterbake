import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Nav } from './components/nav';
import { Home } from './components/home';
import { Footer } from './components/footer';
import { Login } from './components/login';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
