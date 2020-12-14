import React, { useContext, useState } from "react";
import { Context } from "../context/Context";
import "./basket.css";

const Basket = () => {
  

  const { basket, deleteFromBasket } = useContext(Context);

  

  

 



  let total = 0;

  return (
    <div className="basket" >
      <div className="fas fa-shopping-cart basket-cart"  >
        <span className="count">{basket.length}</span>
        <ul
          className="basket-list"
          
          
        >
          
          {basket.length ? (
            basket.map((basketProduct) => {
              total+=basketProduct.weight*basketProduct.price;
              return (
                <li key={basketProduct.id} className="basket-items">
                  {`${basketProduct.weight} kq ${basketProduct.name} qiyməti ${
                    basketProduct.weight * basketProduct.price
                  } `}
                  &#8380;
                  
                  <i
                    className="fas fa-trash-alt"
                    onClick={() => deleteFromBasket(basketProduct.id)}
                  ></i>
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
