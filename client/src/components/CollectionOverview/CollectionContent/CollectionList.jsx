import React from 'react';

// Redux
import { connect } from 'react-redux';

// Selectors
import { createStructuredSelector } from 'reselect';
import { selectRecipesByCategory } from '../../../redux/recipes/recipes.selectors';

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
            key={recipe.idMeal}
            recipeID={recipe.idMeal}
            name={recipe.strMeal}
            imageURL={recipe.strMealThumb}
          />
        ))
      }
    </Row >
  )
};

const mapStateToProps = createStructuredSelector({
  recipesByCategory: selectRecipesByCategory
});

export default connect(mapStateToProps)(CollectionList);
