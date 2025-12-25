import React, { useState, useEffect, useContext } from "react";
const CartContext = React.createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = () => {
  const [cart, setCart] = useState();

  useEffect(() => {
    fetchCart(1); // replace `1` with the logged-in user's ID later
  }, []);

  return { cart, setCart };
};

export default CartContext;
