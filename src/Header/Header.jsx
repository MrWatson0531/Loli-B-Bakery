import "../Header/Header.css";
import Logo from "../assets/loli_B_assets/Loli_B_Logo.png";
import { Link } from "react-router-dom";
import cart from "../assets/loli_B_assets/ShoppingCart.jpg";

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
                to="AlexWorld"
                className="header__nav-link"
                onClick={handleAlexClick}
              >
                ALEX'S WORLD
              </Link>
            </li>
          </ul>
        <img src={Logo} alt="Loli B Logo" className="header__logo" />
          <ul className="header__nav-links">
            <li>
              <Link
                to="Contact"
                className="header__nav-link"
                onClick={handleContactClick}
              >
                CONTACT
              </Link>
            </li>
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
