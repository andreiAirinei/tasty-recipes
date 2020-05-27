import React from 'react';

// Bootstrap
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const CollectionListItem = ({ imageURL, name }) => {
  return (
    <Col xs={3}>
      <div className='collection-list--item mb-4'>
        <div className='item-thumbnail'>
          <Image src={imageURL} alt={name} fluid rounded />
          <div className="favorite">
            <img src={require('../../../assets/heart.svg')} alt="Favorite" />
          </div>
        </div>
        <p className='item-name text-dark mt-1'>{name}</p>
      </div>
    </Col>
  )
}

export default CollectionListItem;
