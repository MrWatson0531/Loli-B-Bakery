import { useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import About from "../About/About";
import AlexWorld from "../AlexWorld/AlexWorld";
import Body from "../Body/Body";
import { Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  const handleHomeClick = () => {};

  const handleCartClick = () => {};

  const handleAboutClick = () => {};

  const handleShopClick = () => {};

  const handleContactClick = () => {};

  const handleAlexClick = () => {};

  const handleSocialClick = () => {};


  return (
    <div className="page">
      <div className="page__content">
        <Header
          handleHomeClick={handleHomeClick}
          handleCartClick={handleCartClick}
          handleAboutClick={handleAboutClick}
          handleShopClick={handleShopClick}
          handleContactClick={handleContactClick}
          handleAlexClick={handleAlexClick}
        />
        <Main
          handleHomeClick={handleHomeClick}
          handleCartClick={handleCartClick}
          handleAboutClick={handleAboutClick}
          handleShopClick={handleShopClick}
          handleContactClick={handleContactClick}
          handleAlexClick={handleAlexClick}
        />
        <Footer handleSocialClick={handleSocialClick}/>
      </div>
    </div>
  );
}

export default App;
