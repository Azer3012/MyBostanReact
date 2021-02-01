import React from "react";
import { useContext } from "react";
import { Context } from "../context/Context";

import "./Category.css";

const CategoryList = () => {
  const {
    categories,
    clickedCategory
  } = useContext(Context);

  return (
    <div className="category">
      <hr />
      <ul className="category-menu">
        {categories.map((category, index) => {
          return (
            <li key={index} className="category-item">
              <span
                
                key={index}
                className="category-link"
                onClick={clickedCategory}
              >
                {category.name}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CategoryList;
