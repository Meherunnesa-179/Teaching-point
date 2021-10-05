import React from 'react'
import { Card, CardGroup, Container } from 'react-bootstrap';
import './Services.css'
import img1 from '../../Images/certificate.jpg'
import img2 from '../../Images/library.jpg'
import img3 from '../../Images/best1.jpg'

const Services = () => {
    return (
      <div>
             <h1 className="text-center text-danger m-5"><u>  Our Services</u></h1>
                <div className="container">
                         <div className="row row-cols-1 row-cols-md-3 g-4  m-4">
                             <div className="col ">
                                   <div className="card h-100 border-2 rounded-3 text-center ">
                                   <img src={img1} className="card-img-top" alt="..."/>
                                   <div className="card-body">
                                        <h4 className="card-title">Global Certificate</h4>
                                        <p className="card-text">At the end of course you will get  Certificate that's will help you to achieve you future goal.</p>
                                  </div>
                                </div>
                        </div>
                        <div className="col ">
                            <div className="card h-100 border-2 rounded-3 text-center ">
                                  <img src={img2} className="card-img-top" alt="..."/>
                                  <div className="card-body">
                                         <h4 className="card-title">Amazing Library</h4>
                                         <p className="card-text"> we've gathered some of our essential books that showcase some of the best aspects of a great digital library .....</p>
                                 </div>
                                </div>
                            </div>
                          <div className="col ">
                                <div className="card h-100 border-2 rounded-3 text-center ">
                                    <img src={img3} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h4 className="card-title">Best Online Courses</h4>
                                        <p className="card-text"> We are providing you the best online courses to grow you skills ...</p>
                                  </div>
                                </div>
                            </div>
                   </div>
                   <div className="text-center"> <button className="btn btn-danger px-4">See more</button></div>
            </div>
      </div>
    );
};

export default Services;