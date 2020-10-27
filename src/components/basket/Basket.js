import React, { useEffect, useState } from "react";
import { useInitialState } from "../context/Context";
import "./basket.css";

const Basket = () => {
  const initialState = useInitialState();

  const product = initialState.product;
  let selectedId = initialState.selectedProductId;

  const basket = initialState.basket;
  let quantity = initialState.quantity;

  const [clicked, setClicked] = useState(false);



  
  const showBasket = () => {
    setClicked(!clicked);
    
    
  };

  let total=0

 
basket.map(basket=>{
    total+=basket.quantity*basket.price
})
 


 
  return (
    <div className="basket">
      <span className="fas fa-shopping-cart basket-cart" onClick={showBasket}>
        <span className="count">{basket.length}</span>
        <ul
          className="basket-list"
          style={{ display: clicked ? "flex" : "none" }}
        >
          {basket.map((list) => {
            
            return (
              <li key={list.id} className="basket-items">
                {`${list.name} :${list.quantity} ${
                  list.category == "süd məhsulları" ? "litr" : "kq"
                } toplam:${list.quantity * list.price} manat`}
                <i className="fas fa-trash-alt"></i>
              </li>
            );

          })}
            <hr/>
          <p className="total">umumi:{total}</p>
        </ul>
      </span>
    </div>
  );
};

export default Basket;
