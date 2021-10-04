import React from 'react';
import './Footer.css'
import logo from '../../Images/logo.png'

const Footer = () => {
    return (
     <div className=" p-5 mt-4 section">
            <div className = "div">
            <div className="m-5">
                    <img className="img" src={logo} alt="" />
                    <h2>Luminous Point</h2>
            </div>
            <div className="m-5">
                <h4>Most Sell Course</h4>
                    <ul>
                        <li>Digital Marketing</li>
                        <li>Web Development</li>
                        <li>Spoken English</li>
                        <li>Ethical Hacking</li>
                    </ul>
            </div>
        </div>
        <div className="icon">
        <i class="fab fa-instagram-square fa-5x"></i>
        <i class="fab fa-facebook fa-5x"></i>
        <i class="fab fa-whatsapp-square fa-5x"></i>
        <i class="fas fa-envelope fa-5x"></i>
        </div>
        <h4 className="text-center">Contact us</h4>
     </div>
    );
};

export default Footer;