import React from "react";

import {FaSearch} from 'react-icons/fa'
import "./Search.css";

const Search = () => {
  return (
    <div className="search">
      <div className="form-input">
        <input type="text" className="search-input" />
        <button>
          <FaSearch style={{color:"white"}}/>
        </button>
      </div>
    </div>
  );
};

export default Search;
