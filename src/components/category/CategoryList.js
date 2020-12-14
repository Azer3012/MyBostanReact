import React from "react";
import { useContext } from "react";
import { Context } from "../context/Context";


import "./Category.css";

const CategoryList = () => {
  const { categories,products,clickedCategory,selectedCategory } = useContext(Context);

  return (
    <div className="category">
      <hr />
      <ul className="category-menu">
        {categories.map((category, index) => {
          return (
            <li key={index} className="category-item">
              <a
                key={index}
                // href="#"
                className="category-link"
               onClick={clickedCategory}
              >
                {category.name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CategoryList;
