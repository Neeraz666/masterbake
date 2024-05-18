import bakelogo from '../imgs/bake.png'
import '../css/nav.css'

export const Nav = () => {
    return (
        <nav>
            <div class="navbar">
                <img src={bakelogo} alt="Magnolia Baker" class="logo" />
                    <div class="navbar-container">
                        <ul>
                            <li><a href="/" class="active">HOME</a></li>
                            <li><a href="/">ABOUT US</a></li>
                            <li><a href="/">OUR PRODUCTS</a></li>
                        </ul>
                    </div>
                    <div class="login-container">
                        <a href="#login" class="login-button">
                            Login
                        </a>
                    </div>
                    <div class="login-container">
                        <a href="#signup" class="login-button">
                            Sign Up
                        </a>
                    </div>
            </div>
        </nav>
    )
}