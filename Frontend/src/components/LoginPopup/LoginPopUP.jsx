import React, { useState } from 'react'
import cross_icon from '../../../public/assets/frontend_assets/cross_icon.png';
import './loginpopup.css';
const LoginPopUP = ({ setshowlogin }) => {
  const [currstate, setcurrstate] = useState("Sign up");
  return (
    <div className="login-popup">
      <form action="" className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currstate}</h2>
          <img
            onClick={() => {
              setshowlogin(false);
            }}
            src={cross_icon}
            alt="" 
          />
        </div>
        <div className="login-popup-input">
          {currstate === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="your name" required />
          )}
          <input type="email" placeholder="your email" required />
          <input type="password" placeholder="your password" required />
        </div>
        <button>{currstate === "Sign up" ? "Create account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" name="" id="" />
          <p>By continuing , i agree to the terms of use & privacy policy.</p>
        </div>
        {currstate === "Login" ? (
          <p>Create a new account? <span onClick={() => {setcurrstate("Sign up")}}>Click here</span></p>
        ):(
          <p>Already have an account?<span onClick={() => {setcurrstate("Login")}}>Login here</span></p>
        )}
      </form>
    </div>
  );
};

export default LoginPopUP