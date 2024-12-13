import { useContext, useState  } from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import { assets } from '../../assets';
import './navber.css';

const Navber = ({setshowlogin}) => {
  const navigate = useNavigate();

  const [menu , setmenu ] = useState("Home");
  const { getTotalCartAmount , Token , setToken } = useContext(StoreContext);

  const logout = async() =>{
    localStorage.removeItem("token");
    setToken("");
    navigate('/');
  }
  return (
    <div className="navber">
      <Link to="/">
        <img src={assets.logo} alt="" className="logo" />
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
        <img src={assets.search_icon} alt="" />
        <div className="navber-search-icon">
          <Link to={"/cart"}>
            <img src={assets.basket_icon} alt="" />
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
            <img src={assets.profile_icon} alt="" />
            <ul className="nav-profile-dropdown">
              <li>
                <img src={assets.bag_icon} alt="" />
                <p>Orders</p>{" "}
              </li>
              <hr />
              <li onClick={logout}>
                <img src={assets.logout_icon} alt="" />
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