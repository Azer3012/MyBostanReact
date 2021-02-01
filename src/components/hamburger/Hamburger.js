import React from "react";
import "./Hamburger.css";
import {FaBars} from 'react-icons/fa'
const Hamburger = (props) => {
  return (
    <div className="hamburger" onClick={props.showMenu}>
      <i><FaBars/></i>
    </div>
  );
};

export default Hamburger;
