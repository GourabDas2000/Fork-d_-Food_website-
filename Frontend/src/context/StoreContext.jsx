import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) =>{
    const [cartItems , setcartItems] = useState({}); 

    const addToCart = (itemId) => {
        if(!cartItems[itemId]){
            setcartItems((prev) => ({...prev , [itemId]:1}))
        }
        else{
            setcartItems((prev) => ({...prev , [itemId]:prev[itemId]+1}))
        }
    }
    
    const removeFromCart = (itemId) => {
      setcartItems((prev) => {
        const updatedCount = (prev[itemId] || 0) - 1;
        if (updatedCount <= 0) {
          const { [itemId]: _, ...rest } = prev; 
          return rest;
        }
        return { ...prev, [itemId]: updatedCount };
      });
    };
    const getTotalCartAmount = () => {
      let totalAmmount = 0;
      for (const item in cartItems) {
        if (cartItems[item] > 0) {
          let iteminfo = food_list.find((product) => product.id === item);
          totalAmmount += iteminfo.price * cartItems[item];
        }
      }
      return totalAmmount;
    };
    const contextValue = {
      food_list,
      cartItems,
      setcartItems,
      addToCart,
      removeFromCart,
      getTotalCartAmount
    };

    
    
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider