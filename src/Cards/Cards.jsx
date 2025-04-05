import React from "react";
import "../Cards/Cards.css";
import ItemCard from "../ItemCard/ItemCard";
import { useContext } from "react";
import { itemOptions } from "../utils/contexts/constants";

function Cards({ handleShopClick }) {
  const priceContext = useContext("$");

  return (
    <section className="cards">
      <ul className="cards__list">
        {itemOptions
          .filter((item) => {
            if (item.price === "$$$") {
              return item;
            }
          })
          // .sort((itemA, itemB) => {
          //   return itemA - itemB;
          // })
          .map((item) => {
            return (
              <ItemCard
                key={item._id}
                item={item}
                handleCardClick={handleShopClick}
              />
            );
          })}
      </ul>
    </section>
  );
}

export default Cards;
