import { createSelector } from 'reselect';

const selectIngredients = state => state.ingredients;

// Select all ingredients and sort them alphabetically with a compare function passed to 'sort' method
export const selectAllIngredients = createSelector(
  [selectIngredients],
  ingredients => ingredients.list && ingredients.list.sort((a, b) => {
    const first = a.strIngredient.toUpperCase();
    const second = b.strIngredient.toUpperCase();
    if (first > second) return 1;
    if (first < second) return -1;
    return 0;
  })
);