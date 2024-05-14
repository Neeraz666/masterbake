import bakelogo from '../imgs/bake.png'

export const Nav = () => {
    return (
        <nav>
            <input type="checkbox" id="check" />
            <label htmlFor="check" className="checkbtn">
                <i className="fas fa-bars"></i>
            </label>
            <a href="index.html"><img className="logo" src={bakelogo} alt="" /></a>
            <ul>
                <li><a href="/"><i className="fa-solid fa-house"></i>Home</a></li>
                <li><a href="/menu/"><i className="fa-solid fa-book-open"></i>Menu</a></li>
                <li><a href="about-us.html"><i className="fa-solid fa-company"></i>Sign In</a></li>
            </ul>
        </nav>
    )
}