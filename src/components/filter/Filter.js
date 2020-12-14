import React from "react";
import "./Filter.css";

const Filter = () => {
  return (
    <div className="filter">
      <h3 className="filter-price">Qiymətə görə axtarış</h3>
      <hr />
      <input
        className=" col-md-8 "
        type="range"
        
      />
      <span className="price">price 0-100</span>
    </div>
  );
};

export default Filter;
