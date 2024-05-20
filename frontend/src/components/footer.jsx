import React from 'react';
import facebookLogo from '../imgs/facebooklogo.png';
import instaLogo from '../imgs/instalogo.png'; // Import the Instagram logo
import xLogo from '../imgs/xlogo.png'; // Import the X logo
import maillogo from '../imgs/maillogo.png';
import '../css/footer.css';

export const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-section about">
                    <h2>Master Bake</h2>
                    <p>Leading bakery factory producing a wide range of treats. Good day starts with masterbake</p>
                    <div className="contact">
                        <p><strong>Email:</strong> masterbake2077@gmail.com</p>
                        <p><strong>Phone:</strong> +977 9851133669</p>
                    </div>
                </div>

                <div className="footer-section links">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/menu">Menu</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-section social">
                    <h2>Follow Us</h2>
                    <div className="social-icons">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <img src={facebookLogo} alt="Facebook" />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <img src={instaLogo} alt="Instagram" />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <img src={xLogo} alt="Twitter" />
                        </a>
                        <a href="https://www.gmail.com" target="_blank" rel="noopener noreferrer">
                            <img src={maillogo} alt="Twitter" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
