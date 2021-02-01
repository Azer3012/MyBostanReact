import React, { createContext, useEffect, useState } from "react";

export const Context = createContext();

const ContextProvider = (props) => {
  const [categories, setCategories] = useState([]);

  useEffect(()=>{
    
    fetch('http://localhost:3000/categories')
    .then(res=>res.json())
    .then(data=>setCategories(data))
  },[])



  const [products, setProducts] = useState([]);

  useEffect(()=>{
    
    fetch('http://localhost:3000/products')
    .then(res=>res.json())
    .then(data=>setProducts(data))
  },[])

  //secilmis kateqoriya
  const [selectedCategory,setSelectedCategory]=useState('')

  //product haqqinda sehife
  const [product,setProduct]=useState([])


  //Sebet

  const [basket,setBasket]=useState([]);


  
  


  //secilmis kateqoriyani set etmek
  const clickedCategory=(e)=>{
      
      setSelectedCategory(e.target.innerText.toLowerCase())
  }

  //product haqqinda sehifesine secilen productu set etmek

  const selectedProduct=(product)=>{  
    setProduct(product)
  }


  //sebete elave etmek

  const addToBasket=(name,price,id,weight)=>{

      setBasket([...basket,{name,price,id,weight}])
  }

  //sebetden silmek

  const deleteFromBasket=(id)=>{
    
    setBasket(basket.filter(basket=>basket.id!==id))

  }
  
  
  return (
    <Context.Provider value={{ 
      categories,
      products,
      selectedCategory,
      product,
      basket,
      clickedCategory,
      selectedProduct,
      addToBasket,
      deleteFromBasket

      }}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;


