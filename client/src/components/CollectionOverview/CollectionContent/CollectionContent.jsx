import React, { useEffect } from 'react';

// Redux
import { connect } from 'react-redux';
import { getRecipesByCategory } from '../../../redux/recipes/recipes.actions';

// Components
import CollectionList from './CollectionList';

const CollectionContent = ({ getRecipesByCategory, activeCategory }) => {
  useEffect(() => {
    getRecipesByCategory(activeCategory);
  }, [getRecipesByCategory, activeCategory]);

  return (
    <div className='collection-content'>
      <CollectionList />
    </div>
  )
}

const mapStateToProps = ({ category }) => ({
  activeCategory: category.activeCategory
});

const mapDispatchToProps = dispatch => ({
  getRecipesByCategory: (category) => dispatch(getRecipesByCategory(category))
})

export default connect(mapStateToProps, mapDispatchToProps)(CollectionContent);
