import React from "react";
import "./Hamburger.css";
const Hamburger = (props) => {
  return (
    <div className="hamburger" onClick={props.showMenu}>
      <i className="fas fa-bars"></i>
    </div>
  );
};

export default Hamburger;
