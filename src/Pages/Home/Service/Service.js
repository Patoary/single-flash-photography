import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
  const { id, name, img, detail, price } = service;
  const navigate = useNavigate();
  const navigateToServiceDetail = id => {
    navigate(`/service/${id}`);
  }
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
        <Button onClick={()=>navigateToServiceDetail(id)} variant="dark">Book Now</Button>
      </Card.Body>
    </Card>
        </div>
  );
};

export default Service;