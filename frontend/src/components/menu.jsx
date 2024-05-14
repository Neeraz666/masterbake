import React from 'react'
import '../css/home.css'
import '../css/menu.css'
import '../css/offers.css'

export const Menu = () => {
  return (
    <div>
        <div className="cart">
  <a href="cart.html">
    <i className="fa-solid fa-cart-shopping"></i>
  </a>
  <span>0</span>
</div>

<div className="menu-container">
  <div className="trending">
    <div className="top-menu-pic">
      <img src="./images/menu.png" alt="Menu" />
    </div>
  </div>

  <div className="topic" style={{ textAlign: 'left' }}>
    <h1 style={{ paddingTop: 0 }}>Trending Today</h1>
  </div>

  <div className="gallery">
    <div className="productlist">
      <img src="./images/roastedchicken.png" alt="Whole roasted chicken" />
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
      <img src="./images/chickenburger.avif" alt="Chicken Burger" />
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
      <img src="./images/cheesepizza.jpeg" alt="Cheese pizza" />
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
      <img src="./images/wings.webp" alt="Spicy Chicken Wings" />
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

  <div className="menu-top">
    <div className="menu-text">
      <h1>Menus</h1>
    </div>
    <div className="search-box">
      <input type="text" id="search-food" placeholder="Search food" />
      <i className="fa-solid fa-magnifying-glass" id="search-button"></i>
    </div>
  </div>

  <div id="products-food">
    <div className="product-category">
      <h6>Sandwich</h6>
    </div>

    <div id="sandwich">
      <div className="gallery">
        <div className="productlist">
          <img src="./images/veggrilledsandwich.jpeg" alt="Veg Grilled Sandwich" />
          <h3>Veg Grilled Sandwich</h3>
          <h6>$17.00</h6>
          <ul>
            <li>
              <i className="fa fa-star checked"></i>
              <i className="fa fa-star checked"></i>
              <i className="fa fa-star checked"></i>
              <i className="fa fa-star checked"></i>
              <i className="fa fa-star"></i>
            </li>
          </ul>
          <button className="buy-1">Buy Now</button>
        </div>

        <div className="productlist">
          <img src="./images/breadomelette.webp" alt="Cheese Omelette Sandwich" />
          <h3>Cheese Omelette Sandwich</h3>
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
          <img src="./images/grilledchickensandwich.jpeg" alt="Chicken Grilled Sandwich" />
          <h3>Chicken Grilled Sandwich</h3>
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
          <img src="./images/chickentikkasandwich.jpeg" alt="Chicken Tikka Sandwich" />
          <h3>Chicken Tikka Sandwich</h3>
          <h6>$10.00</h6>
          <ul>
            <li>
              <i className="fa fa-star checked"></i>
              <i className="fa fa-star checked"></i>
              <i className="fa fa-star checked"></i>
              <i className="fa fa-star checked"></i>
              <i className="fa fa-star"></i>
            </li>
          </ul>
          <button className="buy-4">Buy Now</button>
        </div>
      </div>
    </div>

    <div className="product-category">
      <h6>Burger</h6>
    </div>

    <div id="burger">
      <div className="gallery">
        <div className="productlist">
          <img src="./images/aalootikki.jpeg" alt="Aloo Tikki" />
          <h3>Aloo Tikki</h3>
          <h6>$17.00</h6>
          <ul>
            <li>
              <i className="fa fa-star checked"></i>
              <i className="fa fa-star checked"></i>
              <i className="fa fa-star checked"></i>
              <i className="fa fa-star checked"></i>
              <i className="fa fa-star"></i>
            </li>
          </ul>
          <button className="buy-1">Buy Now</button>
        </div>

        <div className="productlist">
          <img src="./images/chickenburger.avif" alt="Chicken Burger" />
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
          <img src="./images/burger.webp" alt="Chicken Grilled Burger" />
          <h3>Chicken Grilled Burger</h3>
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
          <img src="./images/hamburger.avif" alt="Ham Burger" />
          <h3>Ham Burger</h3>
          <h6>$10.00</h6>
          <ul>
            <li>
              <i className="fa fa-star checked"></i>
              <i className="fa fa-star checked"></i>
              <i className="fa fa-star checked"></i>
              <i className="fa fa-star checked"></i>
              <i className="fa fa-star"></i>
            </li>
          </ul>
          <button className="buy-4">Buy Now</button>
        </div>
      </div>
    </div>

    <div className="product-category">
      <h6>Pizza</h6>
    </div>

    <div id="pizza">
      <div className="gallery">
        <div className="productlist">
          <img src="./images/cheesepizza.jpeg" alt="Cheese Pizza" />
          <h3>Cheese Pizza</h3>
          <h6>$17.00</h6>
          <ul>
            <li>
              <i className="fa fa-star checked"></i>
              <i className="fa fa-star checked"></i>
              <i className="fa fa-star checked"></i>
              <i className="fa fa-star checked"></i>
              <i className="fa fa-star"></i>
            </li>
          </ul>
          <button className="buy-1">Buy Now</button>
        </div>

        <div className="productlist">
          <img src="./images/butterchickenpizza.jpeg" alt="Butter Chicken Pizza" />
          <h3>Butter Chicken Pizza</h3>
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
          <img src="./images/pepperonipizza.jpeg" alt="Pepperoni Pizza" />
          <h3>Pepperoni Pizza</h3>
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
          <img src="./images/vegpizza.jpeg" alt="Veg Pizza" />
          <h3>Veg Pizza</h3>
          <h6>$10.00</h6>
          <ul>
            <li>
              <i className="fa fa-star checked"></i>
              <i className="fa fa-star checked"></i>
              <i className="fa fa-star checked"></i>
              <i className="fa fa-star checked"></i>
              <i className="fa fa-star"></i>
            </li>
          </ul>
          <button className="buy-4">Buy Now</button>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}
