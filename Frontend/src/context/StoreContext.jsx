import { createContext, useEffect, useState } from "react";
import axios from 'axios';
export const StoreContext = createContext(null);

const StoreContextProvider = (props) =>{
    const [cartItems , setcartItems] = useState({}); 
    const [Token , setToken] = useState("")
    const [food_list , setFoodList] = useState([]);
    const addToCart = async (itemId) => {
        if(!cartItems[itemId]){
            setcartItems((prev) => ({...prev , [itemId]:1}))
        }
        else{
            setcartItems((prev) => ({...prev , [itemId]:prev[itemId]+1}))
        }
        if(Token){
          await axios.post(`${url}/api/cart/add` , {itemId},{headers:{"token":Token}});
        }
    }
    
    const removeFromCart = async(itemId) => {
      setcartItems(prev => {
        const updatedCount = (prev[itemId] || 0) - 1;
        if (updatedCount <= 0) {
          const { [itemId]: _, ...rest } = prev; 
          return rest;
        }
        
        return { ...prev, [itemId]: updatedCount };
      });
      if(Token){
          await axios.post(`${url}/api/cart/remove` , {itemId},{headers:{"token":Token}});
      }
    };
    const getTotalCartAmount = () => {
      let totalAmmount = 0;
      for (const item in cartItems) {
        if (cartItems[item] > 0) {
          let iteminfo = food_list.find((product) => product._id === item);
          if(iteminfo){
            totalAmmount += iteminfo.price * cartItems[item];
          } 
            
        }
      }
      return totalAmmount;
    };
    useEffect(() => {
      async function loadData() {
        await fetchFoodList();
        if(localStorage.getItem("token")){
          setToken(localStorage.getItem("token"))
          await loadCartData(localStorage.getItem("token"));
        }
      }
      loadData();
    },[])

    const url = import.meta.env.VITE_API_URL;
    const fetchFoodList = async() => {
      const response = await axios.get(`${url}/api/food/list`);
      setFoodList(response.data.data)
    }

    const loadCartData = async(token) => {
      const response = await axios.post(`${url}/api/cart/get` ,{} ,{headers:{"token":token}});
      setcartItems(response.data.cartData);
    }

    const contextValue = {
      food_list,
      cartItems,
      setcartItems,
      addToCart,
      removeFromCart,
      getTotalCartAmount,
      Token,
      setToken,
      url
    };

    
    
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider