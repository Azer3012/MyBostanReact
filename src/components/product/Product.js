import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../context/Context";
import "./Product.css";

const Product = () => {
  const { products, selectedCategory,selectedProduct } = useContext(Context);
  
  return (
    <div className="container">
      <div className="product-row">
        {products.map((product) => {
          if (selectedCategory === "bütün mallar" || selectedCategory === "") {
            return (
              <div key={product.id} className="product-parent ">
                <div
                  className="product"
                  style={{ backgroundImage: `url(${product.img})` }}
                >
                  
                  <NavLink exact  to="/product" className="about"
                  onClick={()=>selectedProduct(product)}
                  >
                    ətraflı
                  </NavLink>
                </div>
                <div className="info">
                  <p className="product-name">{product.name}</p>
                  <span className="product-price">{product.price} &#8380;</span>
                </div>
              </div>
            );
          } else if (selectedCategory === product.category) {
            return (
              <div key={product.id} className="product-parent ">
                <div
                  className="product"
                  style={{ backgroundImage: `url(${product.img})` }}
                >
                  <NavLink exact to="/product" className="about"
                  onClick={()=>selectedProduct(product)}
                  >
                    ətraflı
                  </NavLink>
                </div>
                <div className="info">
                  <p className="product-name">{product.name}</p>
                  <span className="product-price">{product.price} &#8380;</span>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Product;
