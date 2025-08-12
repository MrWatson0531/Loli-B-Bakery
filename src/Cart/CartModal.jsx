import "../Cart/CartModal.css";
import { itemOptions } from "../utils/constants";
// import { CurrentCartContext } from "../utils/contexts/CurentCartContext";


function Cart({ isOpen, handleCloseClick }) {
  // need to access cart array here
  // need to be able to update cart array (to delete items)
  // const cartContext  = useContext(CurrentCartContext);

  return (
    <section className={`cart ${isOpen ? "cart_opened" : ""}`}>
      <div className="cart__modal">
        <button
          className="cart__modal-close"
          type="button"
          onClick={handleCloseClick}
        ></button>
        <h2 className="cart__modal-heading">Your Shopping Cart</h2>
        <ul className="cart__items">
          <li className="cart__item">
            <img
              src={itemOptions.url}
              alt={itemOptions.name}
              className="cart__item-image"
            />
            <p className="cart__item">{itemOptions.name}</p>
            <p className="cart__item-price">{itemOptions.price}</p>
          </li>
        </ul>
        <button className="cart__modal-confirm" type="submit">
          Check-Out
        </button>
      </div>
    </section>
  );
}
export default Cart;
