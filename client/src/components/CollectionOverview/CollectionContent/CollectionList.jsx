import React from 'react';

// Redux
import { connect } from 'react-redux';

// Components
import CollectionListItem from './CollectionListItem';

// Bootstrap
import Row from 'react-bootstrap/Row';

const CollectionList = ({ recipesByCategory }) => {
  return (
    <Row className='collection-list'>
      {
        recipesByCategory.data && recipesByCategory.data.map(recipe => (
          <CollectionListItem
            name={recipe.strMeal}
            imageURL={recipe.strMealThumb}
          />
        ))
      }
    </Row >
  )
};

const mapStateToProps = state => ({
  recipesByCategory: state.recipes.recipesByCategory
});

export default connect(mapStateToProps)(CollectionList);
