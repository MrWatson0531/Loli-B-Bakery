import { itemOptions } from "../utils/constants";

export default function ShopButtons({ }) {
  return (
    <div className="shop__header">
      {itemOptions.map((item) => (
               <li
          className={`shop__button`}
          key={item._id}
                 >
          {item._id}
        </li>
      ))}
    </div>
  );
}