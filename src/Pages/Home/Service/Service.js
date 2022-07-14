import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Service = ({service}) => {
    const {name,img,detail,price} = service;
    return (
        <div className='g-5 col-sx-12 col-sm-12 col-md-6 col-lg-4 sm-centar'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
        {detail}
        <h3>{price}</h3>
        </Card.Text>
        <Button variant="dark">Book Now</Button>
      </Card.Body>
    </Card>
        </div>
    );
};

export default Service;