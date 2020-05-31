import { createSelector } from 'reselect';

const selectRecipes = state => state.recipes;

export const selectAllRecipes = createSelector(
  [selectRecipes],
  recipes => recipes.allRecipes
);

// Custom searchable list further used with react-select library
export const selectSearchList = createSelector(
  [selectAllRecipes],
  allRecipes => allRecipes ? allRecipes.map(recipe =>
    ({
      value: recipe.idMeal,
      label: recipe.strMeal
    })) : null
);

export const selectSingleRecipe = createSelector(
  [selectRecipes],
  recipes => recipes.singleRecipe
);

export const selectRandomRecipes = createSelector(
  [selectRecipes],
  recipes => recipes.randomMultiple
);

export const selectLatestRecipes = createSelector(
  [selectRecipes],
  recipes => recipes.latestRecipes
);

export const selectRecipesByCategory = createSelector(
  [selectRecipes],
  recipes => recipes.recipesByCategory
);

export const selectLimitedRecipesList = size => createSelector(
  [selectRecipesByCategory],
  recipes => {
    if (!recipes.data) return [];

    // We assume that the meals length list is greater than the 'size'
    // If is not greater than 'size', maxLength takes the meals.length value
    let maxLength;
    recipes.data.length < size ?
      maxLength = recipes.data.length
      : maxLength = size;

    // Using this structure to comply with reducer's state structure
    const newList = { data: [] };

    for (let i = 0; i < maxLength; i++) {
      newList.data.push(recipes.data[i]);
    }
    return newList;
  }
);