import React from "react";

import "./Search.css";



const Search = () => {
  return ( 
    <div className="search">
    <div className="form-input">
      <input type="text" className="search-input" />
      <button >
        <i className="fas fa-search"></i>
      </button>
    </div>
  </div>
   );
}
 
export default Search;
