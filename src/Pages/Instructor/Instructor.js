import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const Instructor = (props) => {
    console.log(props);
    const {name , picture , price , course, country} = props.instructor;
    // console.log(props.instructor)
    return (

             <div>
                 <div className="col ">
                        <div className="card h-100 border-2 rounded-3 text-center ">
                                <img src={picture} className="card-img-top" alt="..."/>
                                      <div className="card-body">
                                               <h5 className="card-title">{course}</h5>
                                               <p className="card-text">
                                               <h4 className="text-danger">Instructor : {name}</h4>
                                               <h4> From   {country}</h4>
                                               <h3>Price : $ {price}</h3>
                                              </p>
                                              <p>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                             </p>
                                             <button className="btn btn-danger px-4">Check now</button>
                                        </div>
                                </div>
                        </div>
                  </div>
    );
};

export default Instructor;