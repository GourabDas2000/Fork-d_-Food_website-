import React, { useState } from 'react';
import './navber.css';

function Navber() {

  const [menu , setmenu ] = useState("Home"); 
  return (
    <div className='navber'>
        <img src="/src/assets/Fork'd_Logo.svg" alt="" className="logo" />
        <ul className="navber-menu">
            <li onClick={() => {setmenu("Home")}} className={menu === "Home"?"active":""}>Home</li>
            <li onClick={() => {setmenu("Menu")}} className={menu === "Menu"?"active":""}>Menu</li>
            <li onClick={() => {setmenu("Mobile-app")}} className={menu === "Mobile-app"?"active":""}>Mobile-app</li>
            <li onClick={() => {setmenu("Contact-us")}} className={menu === "Contact-us"?"active":""}>Contact us</li>
        </ul>   
        <div className="navber-right">
            <img src="/src/assets/frontend_assets/search_icon.png" alt="" />
            <div className="navber-search-icon">
                <img src="/src/assets/frontend_assets/basket_icon.png" alt="" />
                <div className="dot"></div>
            </div>
            <button>sign in</button>
        </div>
    </div>
  )
}

export default Navber