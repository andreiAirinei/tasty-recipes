import { combineReducers } from 'redux';
import recipesReducer from './recipes/recipes.reducer';
import videoModalReducer from './videoModal/videoModal.reducer';
import uiReducer from './ui/ui.reducer';
import categoryReducer from './category/category.reducer';
import ingredientsReducer from './ingredients/ingredients.reducer';

const rootReducer = combineReducers({
  recipes: recipesReducer,
  ingredients: ingredientsReducer,
  category: categoryReducer,
  videoModal: videoModalReducer,
  ui: uiReducer
});

export default rootReducer;