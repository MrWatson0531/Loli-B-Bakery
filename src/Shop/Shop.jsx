import "../Shop/Shop.css";
import ItemCard from "../ItemCard/ItemCard";
import { itemOptions } from "../utils/contexts/constants";

function Shop({ handleItemClick }) {
  return (
    <section className="shop">
      <div className="shop__main">
        <button className="shop__type-button">Cookies</button>
        <button className="shop__type-button">Cupcakes</button>
      </div>
      <div className="shop__surface">
        <section className="shop__cards">
          {itemOptions.map((item) => {
            return (
              <ItemCard
                key={item._id}
                item={item}
                handleCardClick={handleItemClick}
              />
            );
          })}
        </section>
      </div>
    </section>
  );
}

export default Shop;
