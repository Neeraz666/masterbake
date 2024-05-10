export const Nav = () => {
    return (
        <nav>
            <input type="checkbox" id="check" />
            <label htmlFor="check" className="checkbtn">
                <i className="fas fa-bars"></i>
            </label>
            <a href="index.html"><img className="logo" src="./images/logo.png" alt="" /></a>
            <ul>
                <li><a href="index.html"><i className="fa-solid fa-house"></i>Home</a></li>
                <li><a href="menu.html"><i className="fa-solid fa-book-open"></i>Menu</a></li>
                <li><a href="offers.html"><i className="fa-solid fa-newspaper fa-bounce"></i>Offers</a></li>
                <li><a href="about-us.html"><i className="fa-solid fa-company"></i>About Us</a></li>
            </ul>
        </nav>
    )
}