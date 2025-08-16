import React from "react";
import "../Cards/Cards.css";
import ItemCard from "../ItemCard/ItemCard";
import { useContext } from "react";
import { itemOptions } from "../utils/constants";

function Cards( {handleItemClick} ) {
  // const priceContext = useContext("");
  console.log("123");
  // console.log(priceContext);

  return (
    <section className="cards">
      <ul className="cards__list" key="cards_list">
        {itemOptions
          .filter((item) => {
            if (item.price === "$15.00") {
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
                handleItemClick={ handleItemClick }
              />
            );
          })}
      </ul>
    </section>
  );
}

export default Cards;
