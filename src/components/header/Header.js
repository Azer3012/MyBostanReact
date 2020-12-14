import React, { useState } from "react";
import "./Header.css";
import Menu from "../menu/Menu";
import Search from "../search/Search";
import Hamburger from "../hamburger/Hamburger";
import { NavLink } from "react-router-dom";
import Basket from "../basket/Basket";
const Header = () => {
  const [menu, setMenu] = useState(false);
  const showMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="site-header container-fluid">
      <div className="logo">
        <NavLink to="/home">
          <img src="logo.png" alt="logo" />
        </NavLink>
      </div>

      <Menu menu={menu} />
      <Search />
      <Basket />
      <Hamburger showMenu={showMenu} menu={menu} />
    </div>
  );
};

export default Header;
