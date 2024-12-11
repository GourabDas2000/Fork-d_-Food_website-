import React from 'react'
import {assets} from '../../assets/assets.js'
import './navber.css';
const Navber = () => {
  return (
    <div className='navber'>
    <img src={assets.logo} alt="" className="logo" />
    <img src={assets.profile_image} alt="" className="profile" />
    </div>
  )
}

export default Navber