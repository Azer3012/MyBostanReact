import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../context/Context";

import "./productInfoRoute.css";

const ProductInfoRoute = () => {

  const{product}=useContext(Context)
  return (
    <div className="product-info-route">
      <ul className="product-menu">
        <li className="product-menu-item">
          <NavLink to="/home" className="product-link">
            <i className="fas fa-home"></i>Ana Səhifə
          </NavLink>
        </li>
        <li className="product-menu-item">
          <i className="fas fa-chevron-right"></i>
          <NavLink to="/category" className="product-link">
           Kateqoriyalar
          </NavLink>
        </li>
        <li className="product-menu-item">
          <i className="fas fa-chevron-right"></i>
          <NavLink to="/product" className="product-link">
            {product.name}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default ProductInfoRoute;
