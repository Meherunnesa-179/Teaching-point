import React from 'react';
import logo from '../../Images/logo.png'

const Contact = () => {
    return (
        <div>
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
    );
};

export default Contact;