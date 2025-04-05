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
import ItemModal from "../ItemModal/ItemModal";

// import { carousel } from "../Carousel/carousel";
import { Routes, Route } from "react-router-dom";
import { itemOptions } from "../utils/contexts/constants";
import { getItems, addItem, deleteItem, getCart } from "../utils/api";
import { CurrentCardContext } from "../utils/contexts/CurrentCardContext";
// import Carousel from "../Carousel/Carousel";

// const express = require("express");
// const mongoose = require("mongoose");
// const App = express();

function App() {
  const [page, setPage] = useState("Body");
  const [activeModal, setActiveModal] = useState("");
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState([]);
  const [cart, setCart] = useState([]);

  const handleAddToCart = (items) => {
    addItem().then((res) => {
      const updatedItems = items.filter((item) => {
        return item._id === item._id;
      });
    });
  };

  const handleCartClick = () => {
    setActiveModal("cart");
  };

  const handleItemClick = (item) => {
    setActiveModal("item");
    setSelectedItem(item);
  };

  const handleCloseClick = (e) => {
    console.log(e);
    setActiveModal("");
  };

  useEffect(() => {
    getItems()
      .then((itemOptions) => {
        setItems(itemOptions);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="page">
      <CurrentCardContext.Provider value={{ cart, setCart }}>
        <div className="page__content">
          <Header handleCartClick={handleCartClick} />
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
              element={
                <Shop
                  handleCartClick={handleCartClick}
                  handleItemClick={handleItemClick}
                />
              }
              items={items}
            />
            <Route
              path="/Contact"
              element={<Contact handleCartClick={handleCartClick} />}
            />
            <Route
              path="/Body"
              element={<Body handleCartClick={handleCartClick} items={items} />}
            />
            <Route path="/" element={<Main />} />
          </Routes>
          <Footer />
          <CartModal
            isOpen={activeModal === "cart"}
            handleCloseClick={handleCloseClick}
            cart={cart}
            setCart={setCart}
          ></CartModal>
          <ItemModal
            isOpen={activeModal === "item"}
            handleCloseClick={handleCloseClick}
            item={selectedItem}
            setSelectedItem={setSelectedItem}
            setActiveModal={setActiveModal}
          ></ItemModal>
        </div>
      </CurrentCardContext.Provider>
    </div>
  );
}

export default App;
