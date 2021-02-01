import React from "react";
import { NavLink } from "react-router-dom";

import "./Menu.css";

const Menu = (props) => {

  
  return (
    
    <div>
      
      <ul className="menu" style={props.menu ? { display: "flex" } : null}>
        <li className="menu-item">
          <NavLink to="/home" className="menu-link">
            Ana Səhifə
          </NavLink>
        </li>
        <li className="menu-item">
          <NavLink to="/category" className="menu-link">
            Kateqoriyalar
          </NavLink>
        </li>
        <li className="menu-item">
          <NavLink to="/about" className="menu-link">
            Haqqımızda
          </NavLink>
        </li>
        <li className="menu-item">
          <NavLink to="/contact" className="menu-link">
            Əlaqə
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
