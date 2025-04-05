import "../ItemCard/ItemCard.css";
import { itemOptions } from "../utils/contexts/constants";

function ItemCard({ item, handleShopClick }) {
  const filteredItems = itemOptions.filter((item) => {
    return item.name === itemOptions.name && item.price === itemOptions.price && item.imageUrl === itemOptions.url;
  });

  // const itemOptionUrl = filteredItems[0]?.url;
  // const itemOptionName = filteredItems[0]?.name;
  // const itemOptionPrice = filteredItems[0]?.price;

  // should be able to update cart from this component

  return (
    <li className="card">
      <h2 className="card__name">{item.name}</h2>
      <h2 className="card__price">{item.price}</h2>
      <img
        onClick={() => handleShopClick(item)}
        src={item.url}
        alt={item.name}
        className="card__image"
      />
    </li>
  );
}

export default ItemCard;
