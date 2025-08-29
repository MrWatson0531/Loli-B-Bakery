import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import About from "../About/About";
import AlexWorld from "../AlexWorld/AlexWorld";
import Body from "../Body/Body";
import Shop from "../Shop/ShopContent";
import Contact from "../Contact/Contact";
import CartModal from "../Cart/CartModal";
import ItemModal from "../ItemModal/ItemModal";
import SignupModal from "../userModal/SignupModal";
import LoginModal from "../userModal/LoginModal";
// import { carousel } from "../Carousel/carousel";
import { Routes, Route } from "react-router-dom";
import { itemOptions } from "../utils/constants";
import { AuthContext } from "../utils/contexts/AuthContext";
import { CurrentCardContext } from "../utils/contexts/CurrentCardContext";
import { UserContext } from "../utils/contexts/UserContext";
import CartContext from "../utils/contexts/CartContext";
import ShopContent from "../Shop/ShopContent";
import { checkToken, signIn, signUp } from "../utils/auth";
import { createCart, getCart, addToCart, removeFromCart } from "../utils/api";

// import Carousel from "../Carousel/Carousel";

// const express = require("express");
// const mongoose = require("mongoose");
// const App = express();

function App() {
  const [page, setPage] = useState("Body");
  const [activeModal, setActiveModal] = useState("");
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [cart, setCart] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  //const [token, setToken] = ...

  const handleAddToCart = (item) => {
    if (!cart) {
      createCart(cart).then((res) => {
        console.log("cart created");
      });
    }
    addToCart(item.Id)
      .then((res) => {
        console.log("item added", res.data);
        // If the backend returns the updated user/cart, you can update state here
        setCart(res.data.cart); // Assuming res.data.cart is the updated cart array
      })
      .catch((err) => {
        console.error("Error adding to cart:", err);
      });
    setActiveModal("");
  };

  const handleCartClick = () => {
    getCart(cart).then((res) => {
      console.log("Cart fetched", res.data);
      setCart(res.data.cart);
    });
    setActiveModal("cart");
  };

  const handleRemoveItem = (item) => {
    removeFromCart(item.Id).then((res) => {
      setCart(res.data.cart);
    });
  };

  const handleAddItem = (item) => {
    addToCart(item.Id).then((res) => {
      setCart(res.data.cart);
    });
  };

  const handleSignupClick = () => {
    setActiveModal("signup");
  };

  const handleLoginClick = () => {
    setActiveModal("login");
  };

  const handleItemClick = (item) => {
    setActiveModal("item");
    setSelectedItem(item);
  };

  const handleCloseClick = (e) => {
    console.log(e);
    setActiveModal("");
  };

  const closeActiveModal = (e) => {
    setActiveModal("");
  };

  // const handleAddToCart = (item) => {
  //   setCart((prevCart) => {
  //     const currentItem = prevCart.find((i) => i.id === item.id);

  //     if (currentItem) {
  //       return prevCart.map((i) =>
  //       i.id === item.id ? {...i, quantity: i.quantity + 1} : i);
  //     }
  //     return [...prevCart, {...item, quantity: 1}];
  //   });
  // };

  // runs when we submit login modal
  const handleLogin = (email, password) => {
    // make a fetch to log the user in
    signIn(email, password)
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        setCurrentUser(res);
        setIsLoggedIn(true);
       closeActiveModal();
      })
      .catch(console.error);
  };

  const handleLogOut = (user) => {
    setCurrentUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem("jwt");
  };

  const handleSignup = ({ email, password, name }) => {
    signUp({ email, password, name })
      .then((res) => {
        handleLogin({ email, password });
      })
      .catch(console.error);
    closeActiveModal();
  };

  // on page load fetch to get all the bakers items so that we can display them on the frontend
  // useEffect(() => {
  //   getItems()
  //     .then((itemOptions) => {
  //       setItems(itemOptions);
  //     })
  //     .catch(console.error);
  // }, []);

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      checkToken(jwt)
        .then((res) => {
          console.log(res);
          setIsLoggedIn(true);
          setCurrentUser(res);
        })
        .catch(console.error);
    }
  }, []);

  return (
    <div className="page">
      <CurrentCardContext.Provider value={{ selectedItem, setSelectedItem }}>
        <CartContext.Provider value={{ cart, setCart }}>
          <UserContext.Provider value={{ isLoggedIn, currentUser }}>
            <AuthContext.Provider
              value={{
                currentUser,
                isLoading,
                 handleLogin,
                handleLogOut,
              }}
            >
              <div className="page__content">
                <Header
                  handleCartClick={handleCartClick}
                  handleSignupClick={handleSignupClick}
                  handleLoginClick={handleLoginClick}
                />
                <Routes>
                  <Route
                    path="/About"
                    element={<About handleCartClick={handleCartClick} />}
                  />
                  <Route
                    path="/Contact"
                    element={<Contact handleCartClick={handleCartClick} />}
                  />

                  <Route
                    path="/Shop"
                    element={
                      <ShopContent
                        handleCartClick={handleCartClick}
                        handleItemClick={handleItemClick}
                      />
                    }
                    items={items}
                  />
                  <Route
                    path="/Body"
                    element={
                      <Body
                        handleCartClick={handleCartClick}
                        items={items}
                        handleItemClick={handleItemClick}
                      />
                    }
                  />
                  <Route
                    path="/"
                    element={
                      <Main handleItemClick={handleItemClick} items={items} />
                    }
                  />
                </Routes>
                <Footer />
                <CartModal
                  isOpen={activeModal === "cart"}
                  handleCloseClick={handleCloseClick}
                  handleRemoveItem={handleRemoveItem}
                  cart={cart}
                  setCart={setCart}
                ></CartModal>
                <ItemModal
                  isOpen={activeModal === "item"}
                  handleCloseClick={handleCloseClick}
                  item={selectedItem}
                  selectedItem={selectedItem}
                  handleAddToCart={handleAddToCart}
                  handleAddItem={handleAddItem}
                ></ItemModal>
                <SignupModal
                  onClick={handleCloseClick}
                  isOpen={activeModal === "signup"}
                  onSubmit={handleSignup}
                  handleLoginClick={handleLoginClick}
                />
                <LoginModal
                  onClick={handleCloseClick}
                  isOpen={activeModal === "login"}
                  onSubmit={handleLogin}
                  handleSignupClick={handleSignupClick}
                />
              </div>
            </AuthContext.Provider>
          </UserContext.Provider>
        </CartContext.Provider>
      </CurrentCardContext.Provider>
    </div>
  );
}

export default App;
