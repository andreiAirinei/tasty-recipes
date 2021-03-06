import React from 'react';
import { Link } from 'react-router-dom';

// Bootstrap
import Image from 'react-bootstrap/Image';

const CollectionListItem = ({ recipeID, imageURL, name }) => {

  return (
    <Link to={`/recipes/recipe/${recipeID}`} className='text-decoration-none'>
      <div className='collection-list--item mb-4 mx-auto'>
        <div className='item-thumbnail'>
          <Image src={imageURL} alt={name} fluid rounded />
          <div className="favorite">
            <img src={require('../../../assets/heart.svg')} alt="Favorite" />
          </div>
        </div>
        <p className='item-name text-dark mt-1'>{name}</p>
      </div>
    </Link>
  )
}

export default CollectionListItem;
