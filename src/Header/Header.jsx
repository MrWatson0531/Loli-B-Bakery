import "../Header/Header.css";
import Logo from "../assets/loli_B_assets/Loli_B_Logo.png";

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
      <button className="cart__btn" onClick={handleCartClick} type="button">
        CART
      </button>
      <h1 className="header__offer">
        We are offering free shipping on all orders
      </h1>
      <div className="header__nav-box">
      <ul className="header__nav-links">
        <li>
          <h2 className="header__nav-link" onClick={handleHomeClick}>
            HOME
          </h2>
        </li>
        <li>
          <h2 className="header__nav-link" onClick={handleAboutClick}>
            ABOUT
          </h2>
        </li>
        <li>
          <h2 className="header__nav-link" onClick={handleShopClick}>
            SHOP
          </h2>
        </li>
      </ul>
      <img src={Logo} alt="Loli B Logo" className="header__logo" />
      <ul className="header__nav-links">
        <li>
          <h2 className="header__nav-link" onClick={handleAlexClick}>
            ALEX'S WORLD
          </h2>
        </li>
        <li>
          <h2 className="header__nav-link" onClick={handleContactClick}>
            CONTACT
          </h2>
        </li>
      </ul>
      </div>
    </header>
  );
}

export default Header;
