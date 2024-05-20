import masterbakelogo from '../imgs/masterbakelogo.png';
import '../css/nav.css';
import { useEffect, useState } from 'react';

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
