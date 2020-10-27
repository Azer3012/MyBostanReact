import React from "react";
import { NavLink } from "react-router-dom";
import { useInitialState } from "../context/Context";
import "./Product.css";

const Product = () => {
  const initialState = useInitialState();

  const products = initialState.product;

  const activeCat = initialState.active;

  let price = initialState.price;

  let selected = initialState.selectedProductId;

  return (
    <div className="container">
      <div className="row">
        {products.map((product, index) => {
          if (
            (activeCat === "all" || activeCat === "bütün mallar") &&
            product.price <= price
          ) {
            return (
              <div
                key={index}
                className="col-md-3 col-md-3 col-sm-3 col-sm-10 product-parent"
              >
                <div
                  key={product.id}
                  className="product"
                  style={{ backgroundImage: `url(${product.img})` }}
                >
                  <NavLink
                    exact
                    to="/product"
                    className="about"
                    onClick={() => initialState.selectedId(product.id)}
                  >
                    ətraflı
                  </NavLink>
                </div>

                <div className="info">
                  
                  <p className="product-name">{product.name}</p>
                  <span className="product-price">{product.price}&#8380;</span>
                </div>
              </div>
            );
          } else if (activeCat === product.category && product.price <= price) {
            return (
              <div
                key={index}
                className="col-md-4 col-md-4 col-sm-4 col-sm-10 product-parent"
              >
                <div
                  key={product.id}
                  className="product"
                  style={{ backgroundImage: `url(${product.img})` }}
                >
                  <NavLink
                    exact
                    to="/product"
                    className="about"
                    onClick={() => initialState.selectedId(product.id)}
                  >
                    ətraflı
                  </NavLink>
                </div>

                <div className="info">
                  
                  <p className="product-name">{product.name}</p>
                  <span className="product-price">{product.price}&#8380;</span>
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
