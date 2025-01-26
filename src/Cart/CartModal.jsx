import "../Cart/CartModal.css";

function Cart({}){
    return(
        <section className="cart">
            <ul className="cart__items">
                <li className="cart__item">
                    <img src={item.imageUrl} alt={item.name} className="cart__item-image" />
                    <p className="cart__item">
                        {item.name}
                    </p>
                    <p className="cart__item-price">
                        {item.price}
                    </p>
                    
                </li>
            </ul>
        </section>
    )
}
export default Cart;