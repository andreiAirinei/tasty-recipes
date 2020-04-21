import {
  GET_ALL_RECIPES,
  GET_SINGLE_RECIPE,
  GET_LATEST_RECIPES,
  GET_RANDOM_SINGLE_RECIPE,
  GET_RANDOM_MULTIPLE_RECIPES,
  SET_LOADING
} from './recipes.types';

import {
  setRecipesList
} from './recipes.utils';

const INITIAL_STATE = {
  allRecipes: null,
  singleRecipe: null,
  latestRecipes: {
    data: null,
    isLoading: false
  },
  randomSingle: null,
  randomMultiple: {
    data: null,
    isLoading: false
  }
}

const recipesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL_RECIPES:
      return {
        ...state,
        allRecipes: setRecipesList(action.payload),
        isLoading: false
      }
    case GET_SINGLE_RECIPE:
      return {
        ...state,
        singleRecipe: action.payload,
        isLoading: false
      }

    case GET_LATEST_RECIPES:
      return {
        ...state,
        // latestRecipes: action.payload
        latestRecipes: {
          data: action.payload.data,
          isLoading: action.payload.isLoading
        }
      }

    case GET_RANDOM_SINGLE_RECIPE:
      return {
        ...state,
        randomSingle: action.payload,
        isLoading: false
      }

    case GET_RANDOM_MULTIPLE_RECIPES:
      return {
        ...state,
        randomMultiple: {
          data: action.payload.data,
          isLoading: action.payload.isLoading
        }
      }

    case SET_LOADING:
      return {
        ...state,
        isLoading: true
      }

    default:
      return {
        ...state
      }
  }
}

export default recipesReducer;