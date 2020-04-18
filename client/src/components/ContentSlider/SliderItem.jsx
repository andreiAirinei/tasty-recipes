import React from 'react';
import { Link } from 'react-router-dom';

// Components
import CardItemFooter from '../CardItemFooter/CardItemFooter';

// Bootstrap Components
import Card from 'react-bootstrap/Card';

const shortenTitle = (title) => {
  let words = title.split(" ");
  let newTitle = '';
  for (let i = 0; i < 4; i++) {
    if (words[i] === undefined) break;
    newTitle += words[i] + " ";
  }
  return newTitle;
}

const SliderItem = ({ recipeID, name, category, imgURL, onClick }) => {
  return (
    <Link to='/recipe' className='text-decoration-none text-dark'>
      <Card className='slider-item mx-1 border-0' onClick={onClick}>
        <div className="slider-item-img">
          <Card.Img variant="top" src={`${imgURL}`} />
        </div>
        <div className="card-layout d-flex flex-column justify-content-between">
          <div className="card-layout-top">
            <Card.Body className='p-0 pt-3'>
              <Card.Title className='text-danger l-spacing-2 text-size-1'>{category}</Card.Title>
              <Card.Text className='font-weight-bold pr-1 color-1'>{shortenTitle(name)}</Card.Text>
            </Card.Body>
          </div>
          <div className="card-layout-footer">
            <CardItemFooter difficulty={1} />
          </div>
        </div>

      </Card>
    </Link>

  )
}

export default SliderItem;
