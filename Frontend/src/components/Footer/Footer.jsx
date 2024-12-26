import React from 'react';
import { assets } from '../../assets';
import './footer.css';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} className='footer-logo' alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui harum, ad odio neque error saepe doloribus temporibus hic architecto odit.</p>
            <div className="footer-icon-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>


        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li onClick={ () => {navigate('/privacypolicy')}}>Privacy policy</li>
            </ul>
        </div>


        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-222-456-7890</li>
                <li>dummyid@dummy.com</li>
            </ul>
        </div>
      </div>
      <hr/>
      <p className="footer-copyright">Copyright 2024 Ford'd - All Right Reserved</p>
    </div>
  );
}

export default Footer