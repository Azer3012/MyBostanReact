import React, { useContext, useState } from "react";
import { Context } from "../context/Context";
import uuid from "uuid/v1";
import "./product-about.css";
const ProductAbout = () => {
  const [weight, setWeight] = useState(1);

  const { product, addToBasket } = useContext(Context);


  const addWeight=(e)=>{
    setWeight(e.target.value);

  }
  
  return (
    <div className="product-about">
      <div
        className="product-image"
        // style={{ backgroundImage: `url(${product.img})` }}
      >
        <img src={product.img} alt=""/>
      </div>
      <div className="product-own">
        <p className="product-name">{product.name}</p>
        <span className="product-price">{product.price} &#8380;</span>
        <p className="product-description">
          {product.description}
        </p>
        
        <span className="kq">nece kq</span>
        <input
          type="number"
          className="product-quantity"
          min={1}
          
          onChange={addWeight}
        />

        <button
          className="product-add"
          onClick={() =>
            addToBasket(product.name, product.price, uuid(), weight)
          }
        >
          Səbətə əlavə et
        </button>
        
      </div>
    </div>
  );
};

export default ProductAbout;
