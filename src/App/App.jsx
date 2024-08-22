import { useState } from "react";
import React from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import About from "../About/About";
import AlexWorld from "../AlexWorld/AlexWorld";
import Body from "../Body/Body";
import Shop from "../Shop/Shop";
import Contact from "../Contact/Contact";
import CartModal from "../Cart/CartModal";
import { Routes, Route } from "react-router-dom";

function App() {
  const [theme, setTheme] = React.useState("day");
  const [page, setPage] = useState("Body");

  function handleThemeChange(e) {
    setTheme(e.target.value);
  }

  function ThemeSelect(props) {
    return (
      <select onChange={props.onChange}>
        <option value="day">Day</option>
        <option value="night">Night</option>
      </select>
    );
  }

  function ThemeIcon(props) {
    return <div className="icon">{props.theme === "day" ? "🔆" : "🌙"}</div>;
  }

  function ThemeSelect(props) {
    return (
      <select onChange={props.onChange}>
        <option value="day">Day {props.theme === "day" && "✅"}</option>
        <option value="night">Night {props.theme === "night" && "✅"}</option>
      </select>
    );
  }

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
        <div className={theme}>
          <h2>Welcome</h2>
          <ThemeIcon theme={theme} />
          <ThemeSelect onChange={handleThemeChange} />
        </div>
        <Header />
        <Routes>
          <Route path="/About" element={<About />} />
          <Route path="/AlexWorld" element={<AlexWorld />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Body" element={<Body />} />
          <Route path="CartModal" element={<CartModal />} />
        </Routes>
        <Main />
        <Footer handleSocialClick={handleSocialClick} />
      </div>
    </div>
  );
}

export default App;
