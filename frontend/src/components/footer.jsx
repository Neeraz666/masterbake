import React from 'react';
import '../css/footer.css'

export const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-section about">
                    <h2>Bakery Name</h2>
                    <p>Welcome to our bakery! We offer a wide variety of freshly baked goods made with love.</p>
                    <div className="contact">
                        <p><strong>Email:</strong> contact@bakery.com</p>
                        <p><strong>Phone:</strong> +123 456 7890</p>
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
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}