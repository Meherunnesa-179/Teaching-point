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
       <div className="my-5">
            <h1 className = "text-center text-danger my-5">Courses</h1>
        <div className="instructors-container">
          { 
              card.map(instructor => <Instructor
              key ={instructor.name}
              instructor = {instructor}
              >

              </Instructor>)
              
          } 
        </div>
       </div>
    );
};

export default Courses;