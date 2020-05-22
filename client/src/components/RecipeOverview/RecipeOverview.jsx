import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getRecipeByID, clearSingleRecipe } from '../../redux/recipes/recipes.actions';

// Components
import RecipeHeader from './RecipeHeader';
import RecipeContent from './RecipeContent/RecipeContent';
import RelatedRecipes from '../Sliders/RelatedRecipes';
import SectionTitle from '../layout/SectionTitle';

// Bootstrap
import Container from 'react-bootstrap/Container'

const RecipeOverview = ({ match, getRecipeByID, clearSingleRecipe, singleRecipe }) => {
  useEffect(() => {
    console.log(match.params.recipeID);
    getRecipeByID(match.params.recipeID);

    return () => {
      clearSingleRecipe();
    }
  }, [getRecipeByID, match.params.recipeID, clearSingleRecipe]);

  return (
    <>
      <Container className='recipe-overview' fluid='xl'>
        <div className="recipe-overview-underlay" />
        <RecipeHeader />
        <RecipeContent />
      </Container>
      {
        singleRecipe &&
        <Container className='recipes-slider px-0 mb-5' fluid='xl'>
          <SectionTitle title={`Related ${singleRecipe.strCategory} recipes`} />
          <RelatedRecipes />
        </Container>
      }
    </>
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
