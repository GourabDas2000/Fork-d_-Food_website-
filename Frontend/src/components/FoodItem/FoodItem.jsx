import React, { useContext } from 'react'
import add_icon_white from '../../../public/assets/frontend_assets/add_icon_white.png';
import remove_icon_red from '../../../public/assets/frontend_assets/remove_icon_red.png';
import add_icon_green from "../../../public/assets/frontend_assets/add_icon_green.png";
import './fooditem.css';
import {rating_starts} from "../../assets.jsx";
import { StoreContext } from '../../context/StoreContext.jsx';
const FoodItem = ({id,name,price,description , image}) => {
  const {cartItems , removeFromCart , addToCart} = useContext(StoreContext);
  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img src={image} alt="" className="food-item-image" />
        {
          !cartItems[id]
            ?<img className='add' onClick={() => addToCart(id)} src={add_icon_white} alt=''/>
            :<div className='food-item-counter'>
              <img onClick={() => removeFromCart(id)} src={remove_icon_red} alt="" />
              <p>{cartItems[id]}</p>
              <img onClick={() => addToCart(id)} src={add_icon_green} alt="" />
            </div>
        }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={rating_starts.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
}

export default FoodItem