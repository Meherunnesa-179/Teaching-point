import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const Instructor = (props) => {
    console.log(props);
    const {name , picture , price , course, country} = props.instructor;
    // console.log(props.instructor)
    return (

        <div>
 <div className="instructor container">
  <Card variant = "g-4 m-5">
      <Card.Img  variant="top w-100 h-50 g-4" src={picture} />
       <Card.Body>
           <Card.Title><h2>{course}</h2></Card.Title>
           <Card.Text>
                <h3>Instructor : {name}</h3>
                <h3> From   {country}</h3>
                <h3>Price : $ {price}</h3>
       </Card.Text>
     </Card.Body>
      <Card.Footer>
           <button className="btn btn-primary">Check Now</button>
      </Card.Footer>
  </Card>
 
            </div>
        </div>
    );
};

export default Instructor;