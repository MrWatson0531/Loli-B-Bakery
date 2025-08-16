import "./ItemCard.css";
import { itemOptions } from "../utils/constants";

function ItemCard({ item, handleItemClick }) {
  const filteredItems = itemOptions.filter((item) => {
    return (
      item.name === itemOptions.name &&
      item.price === itemOptions.price &&
      item.imageUrl === itemOptions.url
    );
  });

  return (
    <li className="card" key="card" onClick={() => handleItemClick(item)}>
      <img src={item?.url} alt={item?.name} className="card__image" />
      <div className="card__info">
        <h2 className="card__price">{item?.price}</h2>
        <h2 className="card__name">{ item?.name }</h2>
      </div>
    </li>
  );
}

export default ItemCard;
