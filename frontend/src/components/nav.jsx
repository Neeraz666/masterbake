import React, { useState, useEffect } from 'react';
import masterbakelogo from '../imgs/masterbakelogo.png';
import '../css/nav.css';
import { useEffect, useState } from 'react';

<<<<<<< HEAD
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

    const logout = () => {
        // Add logout functionality here
        alert('Logging out...');
    };

=======
export const Nav = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

>>>>>>> 9eb74f474456b2fc35475dfda6cd734437a8f956
    return (
        <>
            <div className='logo-container'>
                <a href="/" className="logo-link">
                    <img src={masterbakelogo} alt="MasterBakeoriginalLogo" className="logo" />
                </a>
<<<<<<< HEAD
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
                                <a href="#" onClick={logout}>Logout</a>
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
=======
>>>>>>> 9eb74f474456b2fc35475dfda6cd734437a8f956
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
                    <div className="login-container">
                        <a href="/login" className="login-button">
                            Login
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
};
