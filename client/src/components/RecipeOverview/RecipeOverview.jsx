import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getRecipeByID, clearSingleRecipe } from '../../redux/recipes/recipes.actions';

// Components
import LoadingSpinner from '../layout/LoadingSpinner';
import RecipeHeader from './RecipeHeader';
import RecipeContent from './RecipeContent';

// Bootstrap
import Container from 'react-bootstrap/Container'

const RecipeOverview = ({ match, getRecipeByID, clearSingleRecipe }) => {
  useEffect(() => {
    getRecipeByID(match.params.recipeID);

    return () => {
      clearSingleRecipe();
    }
  }, [getRecipeByID, match.params.recipeID, clearSingleRecipe]);


  return (
    <Container className='recipe-overview' fluid='xl'>
      <div className="recipe-overview-underlay" />
      <RecipeHeader />
      <RecipeContent />
    </Container>
  )
}

const mapStateToProps = state => ({
  singleRecipe: state.recipes.singleRecipe
});

const mapDispatchToProps = dispatch => ({
  getRecipeByID: id => dispatch(getRecipeByID(id)),
  clearSingleRecipe: () => dispatch(clearSingleRecipe())
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeOverview);
