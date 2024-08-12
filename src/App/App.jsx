import { useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import About from "../About/About";
import AlexWorld from "../AlexWorld/AlexWorld";
import Body from "../Body/Body";
import Shop from "../Shop/Shop";
import Contact from "../Contact/Contact";
import Cart from "../Cart/Cart";
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
        <Header/>
        <Routes>
          <Route path="/About" element={<About/>}/>
          <Route path="/AlexWorld" element={<AlexWorld/>}/>
          <Route path="/Shop" element={<Shop/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Body" element={<Body/>}/>
          <Route path="Cart" element={<Cart/>}/>
        </Routes>
        <Main/>
        <Footer handleSocialClick={handleSocialClick}/>
      </div>
    </div>
  );
}

export default App;
