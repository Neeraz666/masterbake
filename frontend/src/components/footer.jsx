import '../css/home.css'

export const Footer = () => {
    return(
        <footer className="footer" style={{ marginTop: "20px" }}>
        <div className="footer-container">
          <div className="row">
            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li><a href="#">MithoCha! - The</a></li>
                <li><a href="#">classic Cusine</a></li>
                <li><a href="#">Baneshwor, Kathmandu</a></li>
                <li><a href="#">Opens at:</a></li>
                <li><a href="#">9am - 10pm</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>View Us</h4>
              <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="menu.html">Menu</a></li>
                <li><a href="offers.html">Offers</a></li>
                <li><a href="about-us.html">About Us</a></li>
                <li><a href="cart.html">Cart</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Contact</h4>
              <ul>
                <li><a href="#">srestabhattarai36@gmail.com</a></li>
                <li><a href="#">+977 9842037220</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Follow us</h4>
              <div className="social-links">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>© 2024 MithoCha. All rights reserved.</p>
        </div>
      </footer>
    )
}