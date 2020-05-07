import {
  GET_ALL_RECIPES,
  GET_LATEST_RECIPES,
  GET_RANDOM_SINGLE_RECIPE,
  GET_RANDOM_MULTIPLE_RECIPES,
  GET_SINGLE_RECIPE,
  GET_RECIPES_BY_CATEGORY,
  SET_LOADING,
  CLEAR_SINGLE_RECIPE
} from './recipes.types';

// Get ALL recipes
export const getAllRecipes = () => async dispatch => {
  try {
    dispatch({
      type: SET_LOADING
    });

    const res = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/search.php?s=`);
    const data = await res.json();

    dispatch({
      type: GET_ALL_RECIPES,
      payload: data.meals
    });
  } catch (err) {
    console.log(err.response.statusText);
  }
}

// Get latest list of recipes
export const getLatestRecipes = () => async dispatch => {
  try {
    dispatch({
      type: GET_LATEST_RECIPES,
      payload: {
        data: null,
        isLoading: true
      }
    })

    const res = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/latest.php`);
    const data = await res.json();

    dispatch({
      type: GET_LATEST_RECIPES,
      payload: {
        data: data.meals,
        isLoading: false
      }
    });
  } catch (err) {
    console.log(err.response.statusText);
  }
}

// Get one random recipe
export const getRandomSingleRecipe = () => async dispatch => {
  try {
    dispatch({
      type: SET_LOADING
    });

    const res = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/random.php`);
    const data = await res.json();

    dispatch({
      type: GET_RANDOM_SINGLE_RECIPE,
      payload: data.meals[0]
    });
  } catch (err) {
    console.log(err.response.statusText);
  }
}

// Get a list of random recipes
export const getRandomMultipleRecipes = () => async dispatch => {
  try {
    dispatch({
      type: GET_RANDOM_MULTIPLE_RECIPES,
      payload: {
        data: null,
        isLoading: true
      }
    });

    const res = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/randomselection.php`);
    const data = await res.json();

    dispatch({
      type: GET_RANDOM_MULTIPLE_RECIPES,
      payload: {
        data: data.meals,
        isLoading: false
      }
    });
  } catch (err) {
    console.log(err.response.statusText);
  }
}

// Search recipe by ID
export const getRecipeByID = (recipeID) => async dispatch => {
  try {
    dispatch({
      type: SET_LOADING
    });

    const res = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/lookup.php?i=${recipeID}`);
    const data = await res.json();

    dispatch({
      type: GET_SINGLE_RECIPE,
      payload: data.meals[0]
    });
  } catch (err) {
    console.error(err.message);
  }
}

// Get recipes by category
export const getRecipesByCategory = (category) => async dispatch => {
  try {
    dispatch({
      type: GET_RECIPES_BY_CATEGORY,
      payload: {
        data: null,
        isLoading: true
      }
    });
    const res = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/filter.php?c=${category}`);
    const data = await res.json();

    dispatch({
      type: GET_RECIPES_BY_CATEGORY,
      payload: {
        data: data.meals,
        isLoading: false
      }
    });
  } catch (err) {
    console.log(err.message);
  }
}

// Set Loading to true
export const setLoading = () => dispatch => {
  dispatch({
    type: SET_LOADING
  })
}

// Clear Single Recipes
export const clearSingleRecipe = () => dispatch => {
  dispatch({
    type: CLEAR_SINGLE_RECIPE
  })
}

// Search recipe by name