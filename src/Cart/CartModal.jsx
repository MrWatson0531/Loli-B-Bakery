import "../Cart/CartModal.css";
import { itemOptions } from "../utils/constants";

function Cart({}){
    return(
        <section className="cart">
            <ul className="cart__items">
                <li className="cart__item">
                    <img src={itemOptions.url} alt={itemOptions.name} className="cart__item-image" />
                    <p className="cart__item">
                        {itemOptions.name}
                    </p>
                    <p className="cart__item-price">
                        {itemOptions.price}
                    </p>
                    
                </li>
            </ul>
        </section>
    )
}
export default Cart;