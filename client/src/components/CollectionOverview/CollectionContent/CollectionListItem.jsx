import React from 'react';
import { Link } from 'react-router-dom';

// Bootstrap
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const CollectionListItem = ({ recipeID, imageURL, name }) => {
  return (
    <Col xs={3}>
      <Link to={`/recipes/recipe/${recipeID}`} className='text-decoration-none'>
        <div className='collection-list--item mb-4'>
          <div className='item-thumbnail'>
            <Image src={imageURL} alt={name} fluid rounded />
            <div className="favorite">
              <img src={require('../../../assets/heart.svg')} alt="Favorite" />
            </div>
          </div>
          <p className='item-name text-dark mt-1'>{name}</p>
        </div>
      </Link>
    </Col>
  )
}

export default CollectionListItem;
