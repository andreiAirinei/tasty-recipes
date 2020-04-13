// UNUSED FUNCTION
export const setRecipesList = (meals) => meals.map(meal => ({
  value: meal.idMeal,
  label: meal.strMeal
}));
