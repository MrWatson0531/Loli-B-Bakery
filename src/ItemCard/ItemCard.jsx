import "./ItemCard.css";

function ItemCard({ item, handleItemClick, handleLike, handleItemLike }) {
  return (
    <li className="card" key={item._id}>
      {/* 🔹 Clicking image or name opens details */}
      <div className="card__surface" onClick={() => handleItemClick(item)}>
        <img src={item?.url} alt={item?.name} className="card__image" />
        <div className="card__info">
          <h2 className="card__price">${item?.price}</h2>
          <h2 className="card__name">{item?.name}</h2>
        </div>
      </div>
    </li>
  );
}

export default ItemCard;
