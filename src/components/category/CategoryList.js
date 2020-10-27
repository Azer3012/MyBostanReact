import React from "react";
import { useInitialState } from "../context/Context";
import "./Category.css";


const CategoryList = () => {
  const initialSate=useInitialState()
  const categories=initialSate.category

  
  return ( 
    <div className="category">
      <h3>Kateqoriyalar</h3>
            <hr />
    <ul className="category-menu">
      
      {categories.map((category, index) => {
        return (
          <li key={index} className="category-item">
            <a
              key={index}
              // href="#"
              className="category-link"
              onClick={(event)=>initialSate.getActive(category.name)}
            >
              {category.name}
              
            </a>
          </li>
        );
      })}
    </ul>
  </div>
   );
}
 
export default CategoryList;
