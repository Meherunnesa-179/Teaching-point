import React, { useEffect, useState } from 'react';
import Instructor from '../Instructor/Instructor';
import './Courses.css'

const Courses = () => {
    const [card, setCard]=useState([])
    useEffect(() => {
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setCard(data.results))
    },[])
    return (
       <div>
                  <h1 className="text-center text-danger m-5"><u>Our Courses</u></h1>
                  <div className="container">
                       <div className=" row row-cols-1 row-cols-md-3 g-4  m-4">
                       { 
                        card.map(instructor => <Instructor
                              key ={instructor.name}
                              instructor = {instructor}
                           >
                         </Instructor>)   
                      }
                    </div>
                   </div>
       </div>
    );
};

export default Courses;