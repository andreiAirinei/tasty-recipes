import React from 'react';

// Bootstrap
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';

const CategoriesItem = ({ name, imgURL }) => {

  return (
    <Col xs={6} md={3} className='categories-item p-1'>
      <div className="categories-card mx-auto">
        <Image src={imgURL} alt={name} rounded fluid />
        <div className="category-name text-center">
          <h4 className='text-white font-weight-bold l-spacing-1'>{name}</h4>
        </div>
      </div>
    </Col>
  )
}

export default CategoriesItem;
