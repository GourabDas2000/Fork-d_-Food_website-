import React, { useContext, useState } from 'react'
import './placeorder.css';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
function PlaceOrder() {

  const { getTotalCartAmount ,Token,food_list,cartItems,url } = useContext(StoreContext);

  const[data,setData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:""
  })

  const onchangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((prev) =>({...prev ,[name]:value}))
  }

  const placeOrder = async(event) =>{
    event.prevetDefault();
    let orderItems = [];
    food_list.map((item) =>{
      if(cartItems[item._id] > 0){
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo)
      }
    })
    
    let orderData = {
      address:data,
      items:orderItems,
      amount:getTotalCartAmount() + 2
    }
    let response = await axios.post(`${url}/api/order/place` , orderData , {headers:{token:Token}})
    if(response.data.success){
      //payment gateway Integration
    }else{
      
    }
  }

  return (
    <form  onSubmit={placeOrder} className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input required onChange={onchangeHandler} name='firstName' value={data.firstName} type="text" placeholder="First name"></input>
          <input required onChange={onchangeHandler} name="lastName" value={data.lastName} type="text" placeholder="Last name"></input>
        </div>
        <input required onChange={onchangeHandler} type="email" name="email" value={data.email} placeholder='email' id="" />
        <input required onChange={onchangeHandler} name='street' value={data.street} type="text" placeholder="Street"></input>
        <div className="multi-fields">
          <input required onChange={onchangeHandler} name="city" value={data.city} type="text" placeholder="City"></input>
          <input required onChange={onchangeHandler} name='state' value={data.state} type="text" placeholder="State"></input>
        </div>
        <div className="multi-fields">
          <input required onChange={onchangeHandler} name="zipcode" value={data.zipcode} type="text" placeholder="Zip Code"></input>
          <input required onChange={onchangeHandler} name='country' value={data.country} type="text" placeholder="Country"></input>
        </div>
        <input required onChange={onchangeHandler} name="phone" value={data.phone} type="Number" placeholder="phone"  />
      </div>

      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₹{(getTotalCartAmount() && getTotalCartAmount()) || 0}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Deleivery Fee</p>
              <p>₹{getTotalCartAmount() === 0 ? 0 : 30}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>
                ₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 30}
              </b>
            </div>
          </div>
          <button type='submit'>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
}

export default PlaceOrder