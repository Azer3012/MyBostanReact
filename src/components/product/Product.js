import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../context/Context";
import "./Product.css";

const Product = () => {
  const { products, selectedCategory, selectedProduct } = useContext(Context);

  const list=products.map((product) => {
    if (selectedCategory === "bütün mallar" || selectedCategory === "") {
      return (
        <div key={product.id} className="product-parent ">
          <div
            className="product"
            style={{ backgroundImage: `url(${product.img})` }}
          >
            <NavLink
              exact
              to="/product"
              className="about"
              onClick={() => selectedProduct(product)}
            >
              ətraflı
            </NavLink>
          </div>
          <div className="info">
            <p className="product-name">{product.name}</p>
            <p className="short-desc">{product.shortDescription}</p>
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
            <NavLink
              exact
              to="/product"
              className="about"
              onClick={() => selectedProduct(product)}
            >
              ətraflı
            </NavLink>
          </div>
          <div className="info">
            <p className="product-name">{product.name}</p>
            <p className="short-desc">{product.shortDescription}</p>
            <span className="product-price">{product.price} &#8380;</span>
          </div>
        </div>
      );
    }
    return console.log()
    
  })

  return (
    <div className="container">
      <div className="product-row">
        {list}
      </div>
    </div>
  );
};

export default Product;
