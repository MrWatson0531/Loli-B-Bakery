import react, { useContext, useState, useEffect } from "react";
import CartContext from "../utils/contexts/CartContext";
import "../Cart/CartModal.css";
import { itemOptions } from "../utils/constants";
// import { CurrentCartContext } from "../utils/contexts/CurentCartContext";

function Cart({ isOpen, handleCloseClick, handleRemove, handleModalOverlayClick }) {
  const { cart } = useContext(CartContext);

  console.log(cart)

  console.log(12321312312313);
  console.log(cart);

  // const entries = Object.entries(cart); // [[2, 1], [3, 2], ...]
  // const items = entries.map((entry) => {
  //   const itemOptions = []
  //   const item = itemOptions.filter(function(item) {
  //     return item.name == entry[0];
  //   })[0];

  //   // add the quantity

  //   return item;
  // });

  // function to remove item by id
  return (
    <section className={`cart ${isOpen ? "cart_opened" : ""}`}
    onClick= {handleModalOverlayClick}>
      <div className="cart__modal">
        <button
          type="button"
          onClick={handleCloseClick}
          className="cart__modal-close"
        >
        </button>

        <h2 className="cart__modal-heading">Your Shopping Cart</h2>

        <ul className="cart__items">
          {!Array.isArray(cart) || cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cart.map((item) => (
              <li className="cart__item" key={item._id}>
                
                <div className="cart__item-details">
                  <img
                  src={item.url}
                  alt={item.name}
                  className="cart__item-image"
                />
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  <p>Qty: {item.quantity}</p>
                
                <button
                  className="cart__remove-item"
                  onClick={() => handleRemove(item._id)}
                >
                  Remove
                </button>
                </div>
             </li>
            ))
          )}
        </ul>

        {cart.length > 0 && (
          <button className="cart__modal-confirm" type="submit">
            Check-Out
          </button>
        )}
      </div>
    </section>
  );
}

export default Cart; 
