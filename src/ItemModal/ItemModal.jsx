import { itemOptions } from "../utils/constants";
import "../ItemModal/ItemModal.css";
import { useContext } from "react";
import { CurrentCardContext } from "../utils/contexts/CurrentCardContext";

function ItemModal({
  isOpen,
  handleCloseClick,
  handleAddToCart,
  selectedItem,
}) {
  return (
    <section className={`itemModal ${isOpen ? "itemModal_opened" : ""}`}>
      <div className="itemModal__surface">
        <button
          className="itemModal__close"
          type="button"
          onClick={handleCloseClick}
        ></button>
        <img src={selectedItem?.url} alt="" className="itemModal__image" />
        <div className="itemModal__footer">
          <div className="itemModal__info-block">
            <h2 className="itemModal__label">{selectedItem?.name}</h2>
            <h2 className="itemModal__price">{ selectedItem?.price }</h2>
            <button
              className="itemModal__button"
              onClick={() => handleAddToCart(selectedItem)}
              type="button"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ItemModal;
