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
import EditModal from "../userModal/EditModal";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
// import { carousel } from "../Carousel/carousel";
import { Routes, Route } from "react-router-dom";
import { itemOptions } from "../utils/constants";
import { AuthContext } from "../utils/contexts/AuthContext";
import {
  getCart,
  addToCart,
  createCart,
  removeFromCart,
  getUser,
} from "../utils/DummyJsonApi";
import { CurrentCardContext } from "../utils/contexts/CurrentCardContext";
import { UserContext } from "../utils/contexts/UserContext";
import CartContext from "../utils/contexts/CartContext";
import ShopContent from "../Shop/ShopContent";
import { checkToken, signIn } from "../utils/auth";
import Profile from "../Profile/Profile";

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

  const handleAddToCart = (bakeryItem) => {
    addItem(bakeryItem.Id)
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

  const handleRemoveItem = (bakeryItem) => {
    removeFromCart(bakeryItem.Id).then((res) => {
      setCart(res.data.cart);
    });
  };

  const handleAddItem = (bakeryItem) => {
    AddToCart(bakeryItem).then((res) => {
      setCart(res.data.cart);
    });
  };

  const handleShopClick = (item) => {};

  const handleSignupClick = () => {
    setActiveModal("signup");
  };

  const handleLoginClick = () => {
    setActiveModal("login");
  };

  const editProfileClick = () => {
    setActiveModal("edit");
  };

  const handleItemClick = (item) => {
    setActiveModal("item");
    setSelectedItem(item);
  };

  const handleCloseClick = (e) => {
    console.log(e);
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

  const handleProfileEdit = ({ name }) => {
    // token is a function
    // localStorage.getItem('jwt')
    editProfile({ name }, localStorage.getItem("jwt"))
      .then((res) => {
        // update current user
        setCurrentUser(res);
        closeActiveModal();
      })
      .catch(console.error);
  };

  const handleLogin = async (username, password) => {
    try {
      const data = await signIn(username, password);
      setToken(data.accessToken);
      setUser(data);
      localStorage.setItem("token", data.accessToken);
      localStorage.setItem("user", JSON.stringify(data));
      return data;
      closeActiveModal();
    } catch (err) {}
  };

  const handleLogOut = (user) => {
    setCurrentUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem("jwt");
    closeActiveModal();
  };

  const handleSignup = ({ email, password, name }) => {
    signUp({ email, password, name })
      .then((res) => {
        handleLogin({ email, password });
      })
      .catch(console.error);
    closeActiveModal();
  };

  const handleItemLike = ({ id, isLiked }) => {
    const token = localStorage.getItem("jwt");
    // Check if this card is not currently liked
    !isLiked
      ? // if so, send a request to add the user's id to the card's likes array
        api
          // the first argument is the card's id
          .addItemLike(id, token)
          .then((updatedItem) => {
            setItems((items) =>
              items.map((item) => (item.Id === id ? updatedItem : item))
            );
          })
          .catch((err) => console.log(err))
      : // if not, send a request to remove the user's id from the card's likes array
        api
          // the first argument is the card's id
          .removeItemLike(id, token)
          .then((updatedItem) => {
            setClothingItems((items) =>
              items.map((item) => (item.Id === id ? updatedItem : item))
            );
          })
          .catch((err) => console.log(err));
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

                handleLogin: handleLogin,
                handleLogOut: handleLogOut,
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
                        handleItemLike={handleItemLike}
                        onItemLike={handleItemLike}
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
                        onItemLike={handleItemLike}
                      />
                    }
                  />
                  <Route
                    path="/"
                    element={
                      <Main
                        handleItemClick={handleItemClick}
                        items={items}
                        onItemLike={handleItemLike}
                        handleItemLike={handleItemLike}
                      />
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
                  handleItemLike={handleItemLike}
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
                <EditModal
                  handleCloseClick={handleCloseClick}
                  isOpen={activeModal === "edit"}
                  onSubmit={handleProfileEdit}
                />
                <logoutModal handleLogoutClick={handleLogOut} />
              </div>
            </AuthContext.Provider>
          </UserContext.Provider>
        </CartContext.Provider>
      </CurrentCardContext.Provider>
    </div>
  );
}

export default App;
