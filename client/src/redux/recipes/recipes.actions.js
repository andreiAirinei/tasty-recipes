import {
  GET_LATEST_RECIPES,
  GET_RANDOM_SINGLE_RECIPE,
  GET_RANDOM_MULTIPLE_RECIPES,
  GET_SINGLE_RECIPE
} from './recipes.types';

// Get latest list of recipes
export const getLatestRecipes = () => async dispatch => {
  try {
    const res = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/latest.php`);
    const data = await res.json();

    dispatch({
      type: GET_LATEST_RECIPES,
      payload: data.meals
    });
  } catch (err) {
    console.log(err.response.statusText);
  }
}

// Get one random recipe
export const getRandomSingleRecipe = () => async dispatch => {
  try {
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
    const res = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/randomselection.php`);
    const data = await res.json();

    dispatch({
      type: GET_RANDOM_MULTIPLE_RECIPES,
      payload: data.meals
    });
  } catch (err) {
    console.log(err.response.statusText);
  }
}

// Search recipe by ID
export const getRecipeByID = (recipeID) => async dispatch => {
  try {
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

// Search recipe by name