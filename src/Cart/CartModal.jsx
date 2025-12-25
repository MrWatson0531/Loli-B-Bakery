import react, { useContext, useState, useEffect } from "react";
import CartContext, { useCart } from "../utils/contexts/CartContext";
import "../Cart/CartModal.css";
import { itemOptions } from "../utils/constants";
// import { CurrentCartContext } from "../utils/contexts/CurentCartContext";

function Cart({
  isOpen,
  handleCloseClick,
  handleRemove,
  handleModalOverlayClick,
}) {
  const  {cart, setCart}  = useCart();

  // TODO: there is NO quantity
  // const totalPrice = cart.reduce((sum, item) => {
  //   console.log("===========");
  //   console.log(item);
  //   return sum + item.price * item.quantity;
  // }, 0);

  const totalPrice = Array.isArray(cart)
  ? cart.reduce(
      (sum, item) =>
        sum + (Number(item?.price) || 0) * (Number(item?.quantity) || 0),
      0
    )
  : 0;

  const handleCheckout = () => {
    alert(`✅ Mock Checkout complete! You paid $${totalPrice.toFixed(2)}`);
    console.log(totalPrice);

    setCart([]);
    handleCloseClick();
  };

  return (
    <section
      className={`cart ${isOpen ? "cart_opened" : ""}`}
      onClick={handleModalOverlayClick}
    >
      <div className="cart__modal">
        <button
          type="button"
          onClick={handleCloseClick}
          className="cart__modal-close"
        ></button>

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
                  <p>${item.price}</p>
                  <p>Qty: {item.quantity}</p>

                  <button
                    className="cart__remove-item"
                    onClick={() => handleRemove(item)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))
          )}
        </ul>

        {cart.length > 0 && (
          <button
            className="cart__modal-confirm"
            type="button"
            onClick={handleCheckout}
          >
            Check-Out
          </button>
        )}
      </div>
    </section>
  );
}

export default Cart;
