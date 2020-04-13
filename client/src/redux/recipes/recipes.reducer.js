import {
  GET_ALL_RECIPES,
  GET_SINGLE_RECIPE,
  GET_LATEST_RECIPES,
  GET_RANDOM_SINGLE_RECIPE,
  GET_RANDOM_MULTIPLE_RECIPES
} from './recipes.types';

import {
  setRecipesList
} from './recipes.utils';

const INITIAL_STATE = {
  allRecipes: null,
  singleRecipe: null,
  latestRecipes: null,
  randomSingle: null,
  randomMultiple: null
}

const recipesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL_RECIPES:
      return {
        ...state,
        allRecipes: setRecipesList(action.payload)
      }
    case GET_SINGLE_RECIPE:
      return {
        ...state,
        singleRecipe: action.payload
      }

    case GET_LATEST_RECIPES:
      return {
        ...state,
        latestRecipes: action.payload
      }

    case GET_RANDOM_SINGLE_RECIPE:
      return {
        ...state,
        randomSingle: action.payload
      }

    case GET_RANDOM_MULTIPLE_RECIPES:
      return {
        ...state,
        randomMultiple: action.payload
      }

    default:
      return {
        ...state
      }
  }
}

export default recipesReducer;