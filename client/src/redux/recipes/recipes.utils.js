// UNUSED FUNCTION
export const setRecipesList = (meals) => meals.map(meal => ({
  value: meal.idMeal,
  label: meal.strMeal
}));

// Get only maximum the first 10 recipes of a Category
export const setListOfRecipesByCategory = (meals) => {
  // First we need to check if the meals list is empty or not
  if (!meals) return null;

  // We assume that the meals length list is greater than 10 so we cap the variable with 10
  let maxLength = 10;
  // If is not greater than 9, maxLength takes the meals.length value
  if (meals.length <= 10) maxLength = meals.length;

  const newMealsList = [];
  for (let i = 0; i < maxLength; i++) {
    newMealsList.push(meals[i]);
  }

  return newMealsList;
};
