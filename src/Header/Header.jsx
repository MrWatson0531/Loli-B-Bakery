import '../Header/Header.css'
import Logo from "../assets/loli_B_assets/Loli_B_Logo.png";

function Header({ handleNavClick, handleCartClick }) {
  return (
    <header className="header">
        <h1 className="header__offer">We are offering free shipping on all orders</h1>
      <ul className="header__nav-links">
        <li>
          <h2 className="header__nav-link" onClick={handleNavClick}>
            HOME
          </h2>
        </li>
        <li>
          <h2 className="header__nav-link" onClick={handleNavClick}>
            ABOUT
          </h2>
        </li>
        <li>
          <h2 className="header__nav-link" onClick={handleNavClick}>
            SHOP
          </h2>
        </li>
      </ul>
      <img src={Logo} alt="Loli B Logo" className="header__logo" />
      <ul className="header__nav-links">
        <li>
          <h2 className="header__nav-link" onClick={handleNavClick}>
            ALEX'S WORLD
          </h2>
        </li>
        <li>
          <h2 className="header__nav-link" onClick={handleNavClick}>
            CONTACT
          </h2>
        </li>
      </ul>
      <button className="cart__btn" onClick={handleCartClick} type="button">
          CART
        </button>
    </header>
  );
}

export default Header;
