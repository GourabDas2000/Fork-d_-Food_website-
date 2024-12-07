import React, { useState } from 'react';
import logo from "../../../public/assets/ForkD_Logo.svg";
import Search_icon from "../../../public/assets/frontend_assets/Search_icon.png";
import basket_icon from '../../../public/assets/frontend_assets/basket_icon.png';
import './navber.css';

function Navber() {

  const [menu , setmenu ] = useState("Home"); 
  return (
    <div className='navber'>
        <img src={logo} alt="" className="logo" />
        <ul className="navber-menu">
            <li onClick={() => {setmenu("Home")}} className={menu === "Home"?"active":""}>Home</li>
            <li onClick={() => {setmenu("Menu")}} className={menu === "Menu"?"active":""}>Menu</li>
            <li onClick={() => {setmenu("Mobile-app")}} className={menu === "Mobile-app"?"active":""}>Mobile-app</li>
            <li onClick={() => {setmenu("Contact-us")}} className={menu === "Contact-us"?"active":""}>Contact us</li>
        </ul>   
        <div className="navber-right">
            <img src={Search_icon} alt="" />
            <div className="navber-search-icon">
                <img src={basket_icon} alt="" />
                <div className="dot"></div>
            </div>
            <button>sign in</button>
        </div>
    </div>
  )
}

export default Navber