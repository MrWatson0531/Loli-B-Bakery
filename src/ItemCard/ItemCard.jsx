import "../ItemCard/ItemCard.css";
import { itemOptions } from "../utils/constants";

function ItemCard({ item, handleShopClick }) {
  const filteredItems = itemOptions.filter((item) => {
    return item.name === itemOptions.name && item.price === itemOptions.price;
  });

  const itemOptionUrl = filteredItems[0]?.url;
  const itemOptionName = filteredItems[0]?.name;
  const itemOptionPrice = filteredItems[0]?.price;

  return (
    <li className="card">
      <h2 className="card__name">{item.name}</h2>
      <h2 className="card__price">{item.price}</h2>
      <img
        onClick={() => handleShopClick(item)}
        src={item.url}
        alt={itemOptionName}
        className="card__image"
      />
    </li>
  );
}

export default ItemCard;
