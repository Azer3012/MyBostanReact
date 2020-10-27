import React from "react";
import { useInitialState } from "../context/Context";

import "./Filter.css";




const Filter = () => {

  const initialState=useInitialState()

  let price=initialState.price

  
  return ( 
    <div className="filter">
      <h3 className="filter-price">Qiymətə görə axtarış</h3>
            <hr />
    <input
      className=" col-md-8 "
      type="range"
      name=""
      id=""
      min="0"
      max="500"
      onChange={(event)=>initialState.getPrice(event.target.value)}
    />
    <span className="price">price 0-{price}</span>
    
  </div>
   );

   
}


 
export default Filter;
