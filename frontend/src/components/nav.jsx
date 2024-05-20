import masterbakelogo from '../imgs/masterbakelogo.png';
import '../css/nav.css';

export const Nav = () => {
    return (
        <nav>
            <div className="navbar">
                <div>
                    <a href="/" className="logo-link">
                        <img src={masterbakelogo} alt="MasterBakeoriginallogo" className="logo" />
                    </a>
                </div>
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
    );
};
