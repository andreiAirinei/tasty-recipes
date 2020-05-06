import React from 'react';
import { Link } from 'react-router-dom';

// Bootstrap
import Image from 'react-bootstrap/Image';

const SidebarLatestItem = ({ recipeID, name, category, imageURL }) => {
  return (
    <Link to={`/recipe/${recipeID}`} className='text-decoration-none text-dark'>
      <div className='latest-list-item d-flex align-items-center mb-1'>
        <div className="image-holder">
          <Image src={`${imageURL}/preview`} alt={name} thumbnail />
        </div>
        <div className="details ml-3 w-100">
          <h6>{name}</h6>
          <p className='text-danger m-0'><em>{category}</em></p>
        </div>
      </div >
    </Link>
  )
}

export default SidebarLatestItem;
