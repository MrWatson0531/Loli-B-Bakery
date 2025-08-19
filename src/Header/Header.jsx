import "../Header/Header.css";
import Logo from "../assets/images/Loli_B_Logo.png";
import { Link } from "react-router-dom";
import cart from "../assets/images/ShoppingCart.jpg";

function Header({
  handleHomeClick,
  handleCartClick,
  handleAboutClick,
  handleShopClick,
  handleAlexClick,
  handleContactClick,
  handleSignupClick,
}) {
  return (
    <header className="header">
      <h1 className="header__offer">
        WE ARE OFFERING FREE SHIPPING ON ALL ORDERS!
      </h1>
      <div className="header__links">
        <div className="header__nav-box">
          <ul className="header__nav-links">
            <li>
              <Link
                to="Body"
                className="header__nav-link"
                onClick={handleHomeClick}
              >
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
              <Link
                to="Contact"
                className="header__nav-link"
                onClick={handleContactClick}
              >
                CONTACT
              </Link>
            </li>
          </ul>
          <Link to="/">
            <img
              src={Logo}
              alt="Loli B Logo"
              className="header__logo"
              onClick={ handleHomeClick }
            />
          </Link>
          <ul className="header__nav-links">
            <li>
              <Link
                to="Shop"
                className="header__nav-link"
                onClick={handleShopClick}
              >
                SHOP
              </Link>
            </li>
            <button
              className="header__signup"
              onClick={handleSignupClick}
              type="button"
            >
              Sign up / Log in
            </button>
            <button
              alt="shopping-cart"
              className="header__nav-cart"
              onClick={handleCartClick}
              type="button"
            ></button>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
