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
import LogoutModal from "../userModal/LogoutModal.jsx";
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
import {
  createCart,
  getCart,
  addToCart,
  removeFromCart,
} from "../utils/api.js";

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
    // if (!cart) {
    //   createCart(cart).then((res) => {
    //     console.log("cart created");
    //   });
    // }
    addToCart(item)
      .then((res) => {
        console.log("item added", res.cart);
        // If the backend returns the updated user/cart, you can update state here
        console.log(1);
        setCart(res.cart); // Assuming res.data.cart is the updated cart array
      })
      .catch((err) => {
        console.error("Error adding to cart:", err);
      });
    setActiveModal("");
  };

  const handleLogoutClick = () => {
    setActiveModal("logout");
  };

  const handleLogout = () => {
    setCurrentUser({ name: "", email: "" });
    setIsLoggedIn(false);
    localStorage.setItem("jwt", "");
  };

  const handleRemove = (item) => {
    console.log(2);
    removeFromCart({ item })
      .then((res) => {
        setCart((prevCart) =>
          prevCart.filter((currentItem) => item._id !== currentItem._id)
        );
      })
      .catch((err) => {
        console.error("error removing item");
      });
  };

  const handleCartClick = () => {
    getCart(cart)
      .then((res) => {
        const cartData = res?.cart; // ✅ correct path
        const ids = new Set(Object.keys(res.cart)); // {2,3,5,7,16}
        setCart(
          itemOptions.filter((item) => {
            return ids.has(item._id);
          })
        );
        console.log("Cart fetched", cartData);
        setActiveModal("cart");
        // setCart(
        //   Object.keys(cartData)
        //     .map((name) => {
        //       const item = items.find((i) => String(i.name) === String(name));
        //       return item ? { ...item, quantity: cartData[name] } : null;
        //     })
        //     .filter(Boolean)
        // );
      })
      .catch((err) => {
        console.error("Error fetching cart:", err);
        setCart([]);
      });
  };

  const handleAddItem = (item) => {
    addToCart(item).then((res) => {
      console.log(6);
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

  // runs when we submit login modal
  const handleLogin = (email, password) => {
    // make a fetch to log the user in
    signIn(email, password)
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        setIsLoggedIn(true);
        setCurrentUser(res);
        // res.cart is the cart

        closeActiveModal();
      })
      .catch((err) => {
        console.log("No user logged in:", err.message);
        setIsLoggedIn(false);
        setCurrentUser(null);
      });
  };

  const handleModalOverlayClick = (e) => {
    e.currentTarget === e.target
      ? closeActiveModal()
      : console.log("not closed");
  };

  useEffect(() => {
    //if a modal is open, then add the keydown event listener
    if (activeModal !== "") {
      const handleEscapeClose = (e) => {
        if (e.key === "Escape") {
          closeActiveModal();
        }
      };
      document.addEventListener("keydown", handleEscapeClose);
    }

    // cleanup function
    return () => {
      console.log("cleanup function has run");
      //remove the keydown event listener
      document.removeEventListener("keydown", {});
    };
  }, [activeModal, closeActiveModal]);

  const handleSignup = ({ email, password, name }) => {
    signUp({ email, password, name })
      .then((res) => {
        handleLogin({ email, password });
      })
      .catch(console.error);
    closeActiveModal();
  };

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      checkToken(token) // API call that validates token
        .then((res) => {
          setIsLoggedIn(true);
          setCurrentUser(res.user); // set user data from backend
        })
        .catch((err) => {
          console.error("Token check failed:", err);
          localStorage.removeItem("jwt"); // remove invalid token
          setIsLoggedIn(false);
          setCurrentUser(null);
        });
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
                handleLogout,
                handleLogoutClick,
              }}
            >
              <div className="page__content">
                <Header
                  handleCartClick={handleCartClick}
                  handleSignupClick={handleSignupClick}
                  handleLoginClick={handleLoginClick}
                  handleLogout={handleLogout}
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
                        items={items}
                      />
                    }
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
                  onClick={handleModalOverlayClick}
                  handleRemove={handleRemove}
                  cart={cart}
                  setCart={setCart}
                />
                <ItemModal
                  isOpen={activeModal === "item"}
                  handleCloseClick={handleCloseClick}
                  item={selectedItem}
                  selectedItem={selectedItem}
                  handleAddToCart={handleAddToCart}
                  handleAddItem={handleAddItem}
                  onClick={handleModalOverlayClick}
                />
                <SignupModal
                  handleCloseClick={handleCloseClick}
                  isOpen={activeModal === "signup"}
                  onSubmit={handleSignup}
                  handleLoginClick={handleLoginClick}
                  onClick={handleModalOverlayClick}
                />
                <LoginModal
                  handleCloseClick={handleCloseClick}
                  isOpen={activeModal === "login"}
                  onSubmit={handleLogin}
                  handleSignupClick={handleSignupClick}
                  onClick={handleModalOverlayClick}
                />
                <LogoutModal
                  onSubmit={handleLogoutClick}
                  handleCloseClick={handleCloseClick}
                  handleLogout={handleLogout}
                  onClick={handleModalOverlayClick}
                  isOpen={activeModal === "logout"}
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
