import React from 'react';
import logo from '../../../public/assets/ForkD_Logo.svg';
import facebook_icon from '../../../public/assets/frontend_assets/facebook_icon.png';
import twitter_icon from '../../../public/assets/frontend_assets/twitter_icon.png';
import linkedin_icon from '../../../public/assets/frontend_assets/linkedin_icon.png';
import './footer.css';

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={logo} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui harum, ad odio neque error saepe doloribus temporibus hic architecto odit.</p>
            <div className="footer-icon-social-icons">
                <img src={facebook_icon} alt="" />
                <img src={twitter_icon} alt="" />
                <img src={linkedin_icon} alt="" />
            </div>
        </div>


        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
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