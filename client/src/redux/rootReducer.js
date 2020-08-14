import { combineReducers } from 'redux';
import recipesReducer from './recipes/recipes.reducer';
import videoModalReducer from './modals/videoModal/videoModal.reducer';
import uiReducer from './ui/ui.reducer';
import categoryReducer from './category/category.reducer';
import ingredientsReducer from './ingredients/ingredients.reducer';
import ingredientsModalReducer from './modals/ingredientModal/ingredientModal.reducer';

const rootReducer = combineReducers({
  recipes: recipesReducer,
  ingredients: ingredientsReducer,
  category: categoryReducer,
  videoModal: videoModalReducer,
  ingredientModal: ingredientsModalReducer,
  ui: uiReducer
});

export default rootReducer;