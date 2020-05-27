import React, { useEffect } from 'react';

// Redux
import { connect } from 'react-redux';
import { getRecipesByCategory } from '../../../redux/recipes/recipes.actions';

// Components
import CollectionList from './CollectionList';

const CollectionContent = ({ getRecipesByCategory }) => {
  useEffect(() => {
    getRecipesByCategory('Seafood');
  }, [])

  return (
    <div className='collection-content'>
      <CollectionList />
    </div>
  )
}

export default connect(null, { getRecipesByCategory })(CollectionContent);
