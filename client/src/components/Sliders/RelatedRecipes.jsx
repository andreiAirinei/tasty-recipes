import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getRecipesByCategory } from '../../redux/recipes/recipes.actions';

// Components
import SliderContainer from '../Sliders/SliderContainer/SliderContainer';

const RelatedRecipes = ({ singleRecipe, getRecipesByCategory, recipesByCategory }) => {
  useEffect(() => {
    if (singleRecipe) getRecipesByCategory({ type: singleRecipe.strCategory, isCountry: false });
  }, [singleRecipe, getRecipesByCategory])

  return (
    <div className='related-recipes'>
      <SliderContainer toShow={recipesByCategory && recipesByCategory} />
    </div>
  )
}

const mapStateToProps = state => ({
  singleRecipe: state.recipes.singleRecipe,
  recipesByCategory: state.recipes.recipesByCategory
});

const mapDispatchToProps = dispatch => ({
  getRecipesByCategory: category => dispatch(getRecipesByCategory(category))
})

export default connect(mapStateToProps, mapDispatchToProps)(RelatedRecipes);
