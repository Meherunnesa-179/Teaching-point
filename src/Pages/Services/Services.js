import React from 'react'
import { Card, CardGroup, Container } from 'react-bootstrap';
import './Services.css'
import img1 from '../../Images/s1.jpg'
import img2 from '../../Images/s-2.jpg'
import img3 from '../../Images/s-3.jpg'

const Services = () => {
    return (
      <div className="header container my-5">
      <h1 className = "text-center text-danger fw-bold"> <u>Our Services</u>
      </h1>
      <div>
<CardGroup className="g-4">
<Card className="m-4">
<Card.Img variant="top w-100 h-50" src={img1} />
<Card.Body>
<Card.Title>Online Courses </Card.Title>
<Card.Text>
  We are providing you the best online courses to grow you skills ...
</Card.Text>
</Card.Body>
<Card.Footer>
<small className="text-muted">see more ..</small>
</Card.Footer>
</Card>
<Card className="m-4">
<Card.Img variant="top w-100 h-50" src={img2} />
<Card.Body>
<Card.Title>Amazing Library</Card.Title>
<Card.Text>
we've gathered some of our essential books that showcase some of the best aspects of a great digital library ....{' '}
</Card.Text>
</Card.Body>
<Card.Footer>
<small className="text-muted">see more...</small>
</Card.Footer>
</Card>
<Card className="m-4">
<Card.Img variant="top w-100 h-50" src={img3} />
<Card.Body>
<Card.Title>Innovative Learning</Card.Title>
<Card.Text>
Students develop their ability to direct their own learning. They set goals, monitor their own progress and reflect on their own strengths.We are working to upgrade ...
</Card.Text>
</Card.Body>
<Card.Footer>
<small className="text-muted">see more</small>
</Card.Footer>
</Card>
</CardGroup>

      </div>
  </div>
    );
};

export default Services;