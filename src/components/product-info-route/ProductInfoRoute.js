import React from "react";
import { NavLink } from "react-router-dom";
import { useInitialState } from "../context/Context";
import './productInfoRoute.css'
const ProductInfoRoute = () => {

  const initialState=useInitialState();

  const product=initialState.product;
  let selectedId=initialState.selectedProductId;

let img=product[selectedId].img;
let name=product[selectedId].name;
let price=product[selectedId].price;
let category=product[selectedId].category;
  return (
    <div className="product-info-route">
      <ul className="product-menu">
        <li className="product-menu-item">
          <NavLink to="/home" className="product-link"><i className="fas fa-home"></i>Ana Səhifə</NavLink>
          
        </li>
        <li className="product-menu-item">
        <i className="fas fa-chevron-right"></i>
  <NavLink to="/category" className="product-link">{category}</NavLink>
        </li>
        <li className="product-menu-item">
        <i className="fas fa-chevron-right"></i>
          <NavLink to="/product" className="product-link">{name}</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default ProductInfoRoute;
