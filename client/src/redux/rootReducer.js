import { combineReducers } from 'redux';
import recipesReducer from './recipes/recipes.reducer';
import uiReducer from './ui/ui.reducer';

const rootReducer = combineReducers({
  recipes: recipesReducer,
  ui: uiReducer
});

export default rootReducer;