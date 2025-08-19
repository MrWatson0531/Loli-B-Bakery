import "../Shop/ShopContent.css";
import ItemCard from "../ItemCard/ItemCard";
import { itemOptions } from "../utils/constants";

function ShopContent({ handleItemClick, handleLike, handleItemLike}) {
  return (
    <section className="shop">
      <div className="shop__main">
        <button className="shop__type-button">Cookies</button>
        <button className="shop__type-button">Cupcakes</button>
      </div>
      <div className="shop__container">
        <section className="shop__content">
          <ul className="cards__list" key="shop_cards-list">
          {itemOptions.filter((item) => {
           if(item.type === "cupcake "){
            return item;
           }}).map ((item)=>{
            return (
              <ItemCard
                key={item._id}
                item={item}
                handleItemClick={ handleItemClick }
              />
            );
            })}
           </ul>
           </section>
        
      </div>
    </section>
           );
           }
        
  


export default ShopContent;
