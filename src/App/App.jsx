import React, { useEffect, useState } from "react";
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
// import { carousel } from "../Carousel/carousel";
import { Routes, Route } from "react-router-dom";
import { itemOptions } from "../utils/constants";
import { getItems, addItem, deleteItem, getCart } from "../utils/api";
// import Carousel from "../Carousel/Carousel";

// const express = require("express");
// const mongoose = require("mongoose");
// const App = express();

function App() {
  const [page, setPage] = useState("Body");
  const [activeModal, setActiveModal] = useState("");
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState([]);
  // function handleThemeChange(e) {
  //   setTheme(e.target.value);
  // }

  // function ThemeSelect(props) {
  //   return (
  //     <select onChange={props.onChange}>
  //       <option value="day">Day</option>
  //       <option value="night">Night</option>
  //     </select>
  //   );
  // }

  // function ThemeIcon(props) {
  //   return <div className="icon">{props.theme === "day" ? "🔆" : "🌙"}</div>;
  // }

  // function ThemeSelect(props) {
  //   return (
  //     <select onChange={props.onChange}>
  //       <option value="day">Day {props.theme === "day" && "✅"}</option>
  //       <option value="night">Night {props.theme === "night" && "✅"}</option>
  //     </select>
  //   );
  // }

  const handleHomeClick = () => {};

  const handleCartClick = () => {
    setActiveModal("open");
  };

  const handleAboutClick = () => {};

  const handleShopClick = () => {};

  const handleContactClick = () => {};

  const handleAlexClick = () => {};

  const handleSocialClick = () => {};

  const handleCloseClick = (e) => {
    console.log(e);
    setActiveModal("");
  };

  // function handleAddItem({ id }) {}

  useEffect(() => {
    setItems(itemOptions);
  }, []);

  return (
    <div className="page">
      <div className="page__content">
        <Header
          handleCartClick={handleCartClick}
          handleHomeClick={handleHomeClick}
          handleAboutClick={handleAboutClick}
          handleShopClick={handleShopClick}
        />
        <Routes>
          <Route
            path="/About"
            element={<About handleCartClick={handleCartClick} />}
          />
          <Route
            path="/AlexWorld"
            element={<AlexWorld handleCartClick={handleCartClick} />}
          />
          <Route
            path="/Shop"
            element={<Shop handleCartClick={handleCartClick} />}
            items={items}
          />
          <Route
            path="/Contact"
            element={<Contact handleCartClick={handleCartClick} />}
          />
          <Route
            path="/Body"
            element={
              <Body
                handleCartClick={handleCartClick}
                items={items}
              />
            }
          />
          <Route path="/" element={<Main />} />
        </Routes>
        <Footer handleSocialClick={handleSocialClick} />
        {activeModal === "open" && (
          <CartModal
            isOpen={activeModal === "open"}
            handleCloseClick={handleCloseClick}
          ></CartModal>
        )}
      </div>
    </div>
  );
}

export default App;
