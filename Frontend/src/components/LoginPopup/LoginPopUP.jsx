import React, { useContext, useState } from 'react'
import { StoreContext } from '../../context/StoreContext';
import { assets } from '../../assets';
import axios from 'axios';
import './loginpopup.css';

const LoginPopUP = ({ setshowlogin  }) => {
  const url = import.meta.env.VITE_API_URL;

  const {  Token , setToken } = useContext(StoreContext);
  const[data , setdata] = useState({
    name:"",
    email:"",
    password:""
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setdata((data) => ({...data , [name]:value}))
  }

  const [currstate, setcurrstate] = useState("Sign up");
  const onLogin = async(event) => {
    event.preventDefault();
    let newurl;
    if(currstate === 'Login'){
      newurl = `${url}/api/user/login`
    }
    else{
      newurl = `${url}/api/user/register`
    }
    console.log(newurl)
    try{
      const response = await axios.post(newurl , data);
      if(response.data.success){
        setToken(response.data.token);
        localStorage.setItem("token" , response.data.token);
        setshowlogin(false);
      }else{
        alert(response.data.message);
      }
    }catch(error){
      console.log(error);
    }
  } 
  return (
    <div className="login-popup"> 
      <form onSubmit={onLogin} action="" className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currstate}</h2>
          <img
            onClick={() => {
              setshowlogin(false);
            }}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-input">
          {currstate === "Login" ? (
            <></>
          ) : (
            <input
              onChange={onChangeHandler}
              value={data.name}
              type="text"
              name="name"
              placeholder="your name"
              required
            />
          )}
          <input
            onChange={onChangeHandler}
            value={data.email}
            name="email"
            type="email"
            placeholder="your email"
            required
          />
          <input
            onChange={onChangeHandler}
            value={data.password}
            name="password"
            type="password"
            placeholder="your password"
            required
          />
        </div>
        <button type='submit'>{currstate === "Sign up" ? "Create account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" name="" id="" />
          <p>By continuing , i agree to the terms of use & privacy policy.</p>
        </div>
        {currstate === "Login" ? (
          <p>
            Create a new account?{" "}
            <span
              onClick={() => {
                setcurrstate("Sign up");
              }}
            >
              Click here
            </span>
          </p>
        ) : (
          <p>
            Already have an account?
            <span
              onClick={() => {
                setcurrstate("Login");
              }}
            >
              Login here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopUP