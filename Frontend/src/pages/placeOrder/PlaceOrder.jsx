import React, { useContext } from 'react'
import './placeorder.css';
import { StoreContext } from '../../context/StoreContext';
function PlaceOrder() {

  const { getTotalCartAmount } = useContext(StoreContext);
  return (


    <div className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="First name"></input>
          <input type="text" placeholder="Last name"></input>
        </div>
        <input type="text" placeholder="Street"></input>
        <div className="multi-fields">
          <input type="text" placeholder="City"></input>
          <input type="text" placeholder="State"></input>
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Zip Code"></input>
          <input type="text" placeholder="Country"></input>
        </div>
        <input type="Number" placeholder="phone" name="" id="" />
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
              <p>₹{2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>₹{(getTotalCartAmount() && getTotalCartAmount()) || 0}</b>
            </div>
          </div>
          <button>
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlaceOrder