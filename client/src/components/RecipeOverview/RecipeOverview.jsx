import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getRecipeByID } from '../../redux/recipes/recipes.actions';

// Components
import LoadingSpinner from '../layout/LoadingSpinner';
import Jumbotron from '../Jumbotron/Jumbotron';

const RecipeOverview = ({ match, getRecipeByID, singleRecipe }) => {
  useEffect(() => {
    getRecipeByID(match.params.recipeID);

    // return {}
  }, [getRecipeByID, match.params.recipeID]);

  console.log(singleRecipe);

  return (
    <div className='recipe-overview'>
      <Jumbotron imgUrl='site2.jpg' />
      <h1>{singleRecipe && singleRecipe.strMeal}</h1>
    </div>
  )
}

const mapStateToProps = state => ({
  singleRecipe: state.recipes.singleRecipe
});

const mapDispatchToProps = dispatch => ({
  getRecipeByID: id => dispatch(getRecipeByID(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeOverview);
