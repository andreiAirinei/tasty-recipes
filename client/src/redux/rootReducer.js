import { combineReducers } from 'redux';
import recipesReducer from './recipes/recipes.reducer';
import videoModalReducer from './modals/videoModal/videoModal.reducer';
import uiReducer from './ui/ui.reducer';
import categoryReducer from './category/category.reducer';
import ingredientsReducer from './ingredients/ingredients.reducer';
import ingredientsModalReducer from './modals/ingredientModal/ingredientModal.reducer';
import credentialsModalReducer from './modals/credentialsModal/credentialsModal.reducer';
import dashboardReducer from './dashboard/dashboard.reducer';
import authReducer from './auth/auth.reducer';

const rootReducer = combineReducers({
  recipes: recipesReducer,
  ingredients: ingredientsReducer,
  category: categoryReducer,
  credentialsModal: credentialsModalReducer,
  videoModal: videoModalReducer,
  ingredientModal: ingredientsModalReducer,
  dashboard: dashboardReducer,
  ui: uiReducer,
  auth: authReducer
});

export default rootReducer;