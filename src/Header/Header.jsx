import "../Header/Header.css";
import Logo from "../assets/loli_B_assets/Loli_B_Logo.png";
import { Link } from "react-router-dom";

function Header({
  handleHomeClick,
  handleCartClick,
  handleAboutClick,
  handleShopClick,
  handleAlexClick,
  handleContactClick,
}) {
  return (
    <header className="header">
      <Link to="Cart" className="cart__btn" onClick={handleCartClick}>
        CART
      </Link>
      <h1 className="header__offer">
        We are offering free shipping on all orders
      </h1>
      <div className="header__nav-box">
        <ul className="header__nav-links">
          <li>
            <Link to="Body" className="header__nav-link" onClick={handleHomeClick}>
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="About"
              className="header__nav-link"
              onClick={handleAboutClick}
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link to="Shop" className="header__nav-link" onClick={handleShopClick}>
              SHOP
            </Link>
          </li>
        </ul>
        <img src={Logo} alt="Loli B Logo" className="header__logo" />
        <ul className="header__nav-links">
          <li>
            <Link to="AlexWorld" className="header__nav-link" onClick={handleAlexClick}>
              ALEX'S WORLD
            </Link>
          </li>
          <li>
            <Link
              to="Contact"
              className="header__nav-link"
              onClick={handleContactClick}
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
