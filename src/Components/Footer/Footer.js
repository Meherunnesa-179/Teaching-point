import React from 'react';
import './Footer.css'
import logo from '../../Images/logo.png'
import image from '../../Images/payment.jpg'

const Footer = () => {
    return (
     <div className=" p-5 mt-4 section">
            <div className="container footer">
                    <div>
                            <h3>Pay with :</h3>
                            <img src={image} alt="" />
                    </div>
                    <div className="mt-4">
                          <h3>Contact info :</h3>
                          <ul>
                                     <li><i class="fas fa-phone-square-alt fa-2x"></i>   +783667467378</li>
                                   <li>   <i class="fas fa-envelope fa-2x"></i>   luminous.point@gmail.com</li>
                        </ul>
                        <div>
                             <div className="ms-3">
                                     <img className="img" src={logo} alt="" />
                                    <h2>Luminous Point</h2>
                            </div>
                      </div>
              </div>
            </div>
     </div>
    );
};

export default Footer;