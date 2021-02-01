import React, { useContext } from "react";
import { Context } from "../context/Context";
import "./basket.css";
import {FaShoppingCart} from  'react-icons/fa'
import {FaTrashAlt} from  'react-icons/fa'
const Basket = () => {
  const { basket, deleteFromBasket } = useContext(Context);

  let total = 0;

  return (
    <div className="basket">
      <div className="basket-cart">
        <FaShoppingCart/>
        <span className="count">{basket.length}</span>
        <ul className="basket-list">
          {basket.length ? (
            basket.map((basketProduct) => {
              total += basketProduct.weight * basketProduct.price;
              return (
                <li key={basketProduct.id} className="basket-items">
                  {`${basketProduct.weight} kq ${basketProduct.name} qiyməti ${
                    basketProduct.weight * basketProduct.price
                  } `}
                  &#8380;
                  <i
                    onClick={() => deleteFromBasket(basketProduct.id)}
                  >
                    <FaTrashAlt/>
                  </i>
                </li>
              );
            })
          ) : (
            <li className="basket-items">Səbət boşdur</li>
          )}

          <hr />
          <p className="total">Toplam:{total}&#8380;</p>
        </ul>
      </div>
    </div>
  );
};

export default Basket;
