import React from 'react'
import './fooditem.css';
import {rating_starts} from "../../assets.jsx";
const FoodItem = ({id,name,price,description , image}) => {
  return (
    <div className="food-item">
      <div className="food-img-container">
        <img src={image} alt="" className="food-item-image" />
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