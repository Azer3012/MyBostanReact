import React, { useReducer } from 'react';
import { useContext } from 'react';

const Context=React.createContext();

export const useInitialState=()=>{
    return useContext(Context)
}

const initialState = {
    categories: [
      { name: "bütün mallar" },
      { name: "ət məhsulları" },
      { name: "süd məhsulları" },
      { name: "meyvə" },
      { name: "tərəvəz" },
      { name: "mürəbbə" },
      { name: "bitki və arı məhsulları" },
    ],
    active: "all",
    price:100,
    selectedProductId:0,
    basket:[],
    
    products: [
      {
        id: 0,
        category: "meyvə",
        name: "alma",
        price: 2,
        img: "product/apple.jpg",
        quantity:1,

        

      },
      {
        id: 1,
        category: "tərəvəz",
        name: "kələm",
        price: 1,
        img: "product/kelem.jpg",
        quantity:1,
        
      },
      {
        id: 2,
        category: "mürəbbə",
        name: "gilas mürəbbəsi",
        price: 5,
        img: "product/jam.jpg",
        quantity:1,
        
      },
      {
        id: 3,
        category: "ət məhsulları",
        name: "halal kəsim ət",
        price: 12,
        img: "product/meat.jpg",
        quantity:1,
        
      },
      {
        id: 4,
        category: "süd məhsulları",
        name: "süd",
        price: 1,
        img: "product/milk.jpg",
        quantity:1,
        
      },
      {
        id: 5,
        category: "bitki və arı məhsulları",
        name: "bal",
        price: 10,
        img: "product/honeyy.jpg",
        quantity:1,
        
      },
    ],
  };


const reducer=(state,action)=>{
    switch(action.type){
        case "activeCat":
            return {...state,active:action.payLoad}
        case "price":
          return{...state,price:action.payLoad}
        case "selectedProduct":
          return{...state,selectedProductId:action.payLoad}
        case "addToBasket":
          return{...state}

        case "quantity":
          return{...state,quantity:action.payLoad}
        
        default:
            return state
    }
}
const ContextProvider = ({children}) => {

    const [state,dispatch]=useReducer(reducer,{
        category:initialState.categories,
        product:initialState.products,
        active:initialState.active,
        price:initialState.price,
        selectedProductId:initialState.selectedProductId,
        basket:initialState.basket,
        
        
        

        
         
    })
    

    //kategoriyaya gore productlari map etmek ucun
    const getActive=(name)=>dispatch({type:"activeCat",payLoad:name})

    //fiterdeki slidere gore qiymete uygun productlar ucun
    const getPrice=(name)=>dispatch({type:"price",payLoad:name})

    //secilmis product 
    const selectedId=(name)=>dispatch({type:"selectedProduct",payLoad:name})

    //sebete elave etmek
    
    const addToBasket=()=>dispatch({type:"addToBasket"},
      state.basket.push(state.product[state.selectedProductId])
    )

    //sebetden silmek 
    const deleteFromBasket=()=>dispatch({type:"addToBasket"},
    state.basket.pop(state.product[state.selectedProductId])
  )


    //miqdar 
    const getQuantity=(event)=>dispatch({type:"quantity"},
    state.product[state.selectedProductId].quantity=event.target.value,
     console.log( state.product[state.selectedProductId].quantity)
    )




    return ( 
        <Context.Provider value={{
            category:state.category,
            product:state.product,
            active:state.active,
            price:state.price,
            selectedProductId:state.selectedProductId,
            basket:state.basket,
            getActive,
            getPrice,
            selectedId,
            addToBasket,
            getQuantity
                       
        }}>
            {children}
        </Context.Provider>
     );
} 
 
export default ContextProvider;
