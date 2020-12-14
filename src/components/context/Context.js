import React, { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = (props) => {
  const [categories, setCategories] = useState([
    { name: "bütün mallar" },
    { name: "ət məhsulları" },
    { name: "süd məhsulları" },
    { name: "meyvə" },
    { name: "tərəvəz" },
    { name: "mürəbbə" },
    { name: "bitki və arı məhsulları" },
  ]);



  const [products, setProducts] = useState([
    {
      id: 0,
      category: "meyvə",
      name: "alma",
      price: 2,
      img: "product/apple.jpg",
      quantity: 1,
      description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.Reprehenderit culpa odit sunt sequi reiciendis asperiores. Lorem ipsumdolor sit, amet consectetur adipisicing elit. Necessitatibus atquequos unde sint in corrupti aliquid! Ipsum nesciunt eos aspernatur?"
    },
    {
      id: 1,
      category: "tərəvəz",
      name: "kələm",
      price: 1,
      img: "product/kelem.jpg",
      quantity: 1,
      description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.Reprehenderit culpa odit sunt sequi reiciendis asperiores. Lorem ipsumdolor sit, amet consectetur adipisicing elit. Necessitatibus atquequos unde sint in corrupti aliquid! Ipsum nesciunt eos aspernatur?"
    },
    {
      id: 2,
      category: "mürəbbə",
      name: "gilas mürəbbəsi",
      price: 5,
      img: "product/jam.jpg",
      quantity: 1,
      description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.Reprehenderit culpa odit sunt sequi reiciendis asperiores. Lorem ipsumdolor sit, amet consectetur adipisicing elit. Necessitatibus atquequos unde sint in corrupti aliquid! Ipsum nesciunt eos aspernatur?"
    },
    {
      id: 3,
      category: "ət məhsulları",
      name: "halal kəsim ət",
      price: 12,
      img: "product/meat.jpg",
      quantity: 1,
      description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.Reprehenderit culpa odit sunt sequi reiciendis asperiores. Lorem ipsumdolor sit, amet consectetur adipisicing elit. Necessitatibus atquequos unde sint in corrupti aliquid! Ipsum nesciunt eos aspernatur?"
    },
    {
      id: 4,
      category: "süd məhsulları",
      name: "süd",
      price: 1,
      img: "product/milk.jpg",
      quantity: 1,
      description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.Reprehenderit culpa odit sunt sequi reiciendis asperiores. Lorem ipsumdolor sit, amet consectetur adipisicing elit. Necessitatibus atquequos unde sint in corrupti aliquid! Ipsum nesciunt eos aspernatur?"
    },
    {
      id: 5,
      category: "bitki və arı məhsulları",
      name: "bal",
      price: 10,
      img: "product/honeyy.jpg",
      quantity: 1,
      description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.Reprehenderit culpa odit sunt sequi reiciendis asperiores. Lorem ipsumdolor sit, amet consectetur adipisicing elit. Necessitatibus atquequos unde sint in corrupti aliquid! Ipsum nesciunt eos aspernatur?"
    },
  ]);

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


