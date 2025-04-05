import { itemOptions } from "../utils/contexts/constants";
import "../ItemModal/ItemModal.css";

function ItemModal({isOpen, handleCloseClick, handleAddToCart, item, setSelectedItem}){
    return (
        <section className={`itemModal ${isOpen ? "itemModal_opened" : ""}`}>
            <div className="itemModal__surface">
            <button
          className="itemModal__close"
          type="button"
          onClick={handleCloseClick}
        ></button> 
            <img src={itemOptions.url} alt="" className="itemModal__image" />
            <div className="itemModal__footer">
                <h2 className="itemModal__label">{itemOptions.name}</h2>
                <h2 className="itemModal__price">{itemOptions.price}</h2>
            </div>
            <button className="itemModal__button" onClick={handleAddToCart} type="button">Add to Cart</button>
            </div>
        </section>
    );
};

export default ItemModal;