import {
  ADD_FAVORITE
} from './favorites.types';

const INITIAL_STATE = {
  current: null
};

const favoritesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case ADD_FAVORITE:
      return {
        ...state,
        current: action.payload
      }

    default:
      return {
        ...state
      }
  }
};

export default favoritesReducer;