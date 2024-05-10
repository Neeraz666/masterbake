import '../css/home.css'
import '../css/menu.css'
import '../css/offers.css'
import { Footer } from "./footer.jsx"
import { Nav } from './nav.jsx'
import xpimg1 from '../imgs/xp.jpg'
import xpimg2 from '../imgs/xp2.jpg'
import chef from '../imgs/chef.png'

export const Home = () => {
    return (
        <>
            <div>
                < Nav />
                <div className="cart">
                    <a href="cart.html"><i className="fa-solid fa-cart-shopping"></i></a>
                </div>
                <div className="container">
                    <div className="pamplet">
                        <img src={xpimg2} alt="" />
                        <div className="ptext">
                            <h1>Take a bite of</h1>
                        </div>
                        <div className="ntext">
                            <h1>Crisp</h1>
                        </div>
                    </div>
                </div>
                <div className="topic" style={{ textAlign: 'left' }}>
                    <h1>Trending Today</h1>
                </div>
                <div className="menu-container">
                    <div className="gallery">

                        <div className="productlist">
                            <img src={xpimg1} alt="" />
                            <h3>Whole roasted chicken</h3>
                            <h6>$12.00</h6>
                            <ul>
                                <li>
                                    <i className="fa fa-star checked"></i>
                                    <i className="fa fa-star checked"></i>
                                    <i className="fa fa-star checked"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </li>
                            </ul>
                            <button className="buy-3">Buy Now</button>
                        </div>

                        <div className="productlist">
                            <img src={xpimg2} alt="" />
                            <h3>Chicken Burger</h3>
                            <h6>$16.00</h6>
                            <ul>
                                <li>
                                    <i className="fa fa-star checked"></i>
                                    <i className="fa fa-star checked"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </li>
                            </ul>
                            <button className="buy-2">Buy Now</button>
                        </div>

                        <div className="productlist">
                            <img src={xpimg1} alt="" />
                            <h3>Cheese pizza</h3>
                            <h6>$16.00</h6>
                            <ul>
                                <li>
                                    <i className="fa fa-star checked"></i>
                                    <i className="fa fa-star checked"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </li>
                            </ul>
                            <button className="buy-2">Buy Now</button>
                        </div>

                        <div className="productlist">
                            <img src={xpimg2} alt="" />
                            <h3>Spicy Chicken Wings</h3>
                            <h6>$12.00</h6>
                            <ul>
                                <li>
                                    <i className="fa fa-star checked"></i>
                                    <i className="fa fa-star checked"></i>
                                    <i className="fa fa-star checked"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </li>
                            </ul>
                            <button className="buy-3">Buy Now</button>
                        </div>
                    </div>
                </div>

                <div className="offer-loop" style={{ marginTop: '60px' }}>
                    <div className="loop-slide">
                        <h2>Offer</h2><h2>Offer</h2><h2>Offer</h2><h2>Offer</h2><h2>Offer</h2><h2>Offer</h2>
                        <h2>Offer</h2><h2>Offer</h2><h2>Offer</h2><h2>Offer</h2><h2>Offer</h2>
                        <h2>Offer</h2><h2>Offer</h2><h2>Offer</h2><h2>Offer</h2><h2>Offer</h2>
                        <h2>Offer</h2><h2>Offer</h2><h2>Offer</h2><h2>Offer</h2><h2>Offer</h2>
                    </div>
                    <div className="loop-slide">
                        <h2>Offer</h2><h2>Offer</h2><h2>Offer</h2><h2>Offer</h2><h2>Offer</h2><h2>Offer</h2>
                        <h2>Offer</h2><h2>Offer</h2><h2>Offer</h2><h2>Offer</h2><h2>Offer</h2>
                        <h2>Offer</h2><h2>Offer</h2><h2>Offer</h2><h2>Offer</h2><h2>Offer</h2>
                        <h2>Offer</h2><h2>Offer</h2><h2>Offer</h2><h2>Offer</h2><h2>Offer</h2>
                    </div>
                </div>

                <div className="offers" style={{ paddingTop: '0px' }}>
                    <div className="flyer">
                        <img className="img" src={xpimg1} alt="lfbasflasjb" />
                        <img className="img" src={xpimg2} alt="" />
                        <img className="img" src={xpimg1} alt="" />
                    </div>
                </div>

                <div className="offer-loop">
                    <div className="loop-slide">
                        <h2>Offer</h2><h2>Offer</h2><h2>Offer</h2><h2>Offer</h2><h2>Offer</h2><h2>Offer</h2>
                        <h2>Offer</h2><h2>Offer</h2><h2>Offer</h2><h2>Offer</h2><h2>Offer</h2><h2>Offer</h2>
                        <h2>Offer</h2><h2>Offer</h2><h2>Offer</h2><h2>Offer</h2><h2>Offer</h2>
                        <h2>Offer</h2><h2>Offer</h2><h2>Offer</h2><h2>Offer</h2><h2>Offer</h2>
                    </div>
                    <div className="loop-slide">
                        <h2>Offer</h2><h2>Offer</h2><h2>Offer</h2><h2>Offer</h2><h2>Offer</h2><h2>Offer</h2>
                        <h2>Offer</h2><h2>Offer</h2><h2>Offer</h2><h2>Offer</h2><h2>Offer</h2><h2>Offer</h2>
                        <h2>Offer</h2><h2>Offer</h2><h2>Offer</h2><h2>Offer</h2><h2>Offer</h2>
                        <h2>Offer</h2><h2>Offer</h2><h2>Offer</h2><h2>Offer</h2><h2>Offer</h2>
                    </div>
                </div>

                <div className="topic">
                    <h1>Our Services</h1>
                </div>

                <div className="caption">
                    <div className="picture">
                        <img className="caption-img" src={chef} alt="" />
                    </div>
                    <div className="thought-bubble">
                        <div className="small-bubble"></div>
                        <div className="big-bubble"></div>
                        <div className="thought-text">
                            <h6>"Experience the speed of satisfaction! Place your order online, and we'll deliver it to your doorstep in no time!"</h6>
                        </div>
                    </div>
                </div>

                <div className="topic" style={{ marginTop: '100px' }}>
                    <h1>Our Partners</h1>
                </div>

                <div className="logos">
                    <div className="logos-slide">
                        <img src="./images/partners/bhoj.png" alt="" />
                        <img src="./images/partners/pathaofood.png" alt="" />
                        <img src="./images/partners/daraz.png" alt="" />
                        <img src="./images/partners/esewa.png" alt="" />
                        <img src="./images/partners/pathaofood.png" alt="" />
                        <img src="./images/partners/daraz.png" alt="" />
                        <img src="./images/partners/khalti.png" alt="" />
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}