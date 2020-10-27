import React, { useState } from "react";
import { useInitialState } from "../context/Context";

import "./product-about.css";
const ProductAbout = () => {
    const [kq,setKq]=useState(0)
    const initialState=useInitialState()
    const product=initialState.product;
    let selectedId=initialState.selectedProductId;

  let img=product[selectedId].img;
  let name=product[selectedId].name;

  
  let price=product[selectedId].price;
  let category=product[selectedId].category;
  
  

 

  
  

  
  return (
    <div className="product-about">
      <div
        className="product-image"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className="product-own">
        <p className="product-name">{name}</p>
        <span className="product-price">{price} &#8380;</span>
        <p className="product-description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Reprehenderit culpa odit sunt sequi reiciendis asperiores. Lorem ipsum
          dolor sit, amet consectetur adipisicing elit. Necessitatibus atque
          quos unde sint in corrupti aliquid! Ipsum nesciunt eos aspernatur?
        </p>
  <span className="kq">nece {category=="süd məhsulları"?"litr":"kq"}</span>
        <input type="number" className="product-quantity" onChange={initialState.getQuantity} />
        
        <button className="product-add" onClick={initialState.addToBasket}>Səbətə əlavə et</button>
      </div>
    </div>
  );
};

export default ProductAbout;
