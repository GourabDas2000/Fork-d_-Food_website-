import React, { useContext, useState } from 'react';
import logo from "../../../public/assets/ForkD_Logo.svg";
import Search_icon from "../../../public/assets/frontend_assets/Search_icon.png";
import basket_icon from '../../../public/assets/frontend_assets/basket_icon.png';
import profile_icon from '../../../public/assets/frontend_assets/profile_icon.png';
import bag_icon from "../../../public/assets/frontend_assets/profile_icon.png";
import logout_icon from "../../../public/assets/frontend_assets/profile_icon.png";
import {Link} from 'react-router-dom';
import './navber.css';
import { StoreContext } from '../../context/StoreContext';

const Navber = ({setshowlogin}) => {

  const [menu , setmenu ] = useState("Home");
  const { getTotalCartAmount , Token , setToken } = useContext(StoreContext);
  return (
    <div className="navber">
      <Link to="/">
        <img src={logo} alt="" className="logo" />
      </Link>
      <ul className="navber-menu">
        <Link
          to={"/"}
          onClick={() => {
            setmenu("home");
          }}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => {
            setmenu("Menu");
          }}
          className={menu === "Menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#download"
          onClick={() => {
            setmenu("Mobile-app");
          }}
          className={menu === "Mobile-app" ? "active" : ""}
        >
          Mobile-app
        </a>
        <a
          href="#footer"
          onClick={() => {
            setmenu("Contact-us");
          }}
          className={menu === "Contact-us" ? "active" : ""}
        >
          Contact us
        </a>
      </ul>
      <div className="navber-right">
        <img src={Search_icon} alt="" />
        <div className="navber-search-icon">
          <Link to={"/cart"}>
            <img src={basket_icon} alt="" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        {!Token ? (
          <button
            onClick={() => {
              setshowlogin(true);
            }}
          >
            sign in
          </button>
        ) : (
          <div className="navber-profile">
            <img src={profile_icon} alt="" />
            <ul className="nav-profile-dropdown">
              <li>
                <img src={bag_icon} alt="" />
                <p>Orders</p>{" "}
              </li>
              <hr />
              <li>
                <img src={logout_icon} alt="" />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navber