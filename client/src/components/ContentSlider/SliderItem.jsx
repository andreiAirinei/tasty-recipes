import React from 'react';
import { Link } from 'react-router-dom';

// Bootstrap Components
import Card from 'react-bootstrap/Card';

const SliderItem = ({ recipeID, name, category, imgURL, onClick }) => {

  return (
    <Link to='/meal'>
      <Card className='slider-item mx-2 border-0' onClick={onClick}>
        <div className="slider-item-img">
          <Card.Img variant="top" src={`${imgURL}/preview`} />
        </div>
        <Card.Body className='p-0 pt-3'>
          <Card.Title className='text-danger'>{category}</Card.Title>
          <Card.Text>{name}</Card.Text>
        </Card.Body>
      </Card>
    </Link>

  )
}

export default SliderItem;
