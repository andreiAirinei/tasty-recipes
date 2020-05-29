import {
  SET_ACTIVE_CATEGORY,
  FETCH_COUNTRIES,
  FETCH_DISH_TYPES
} from './category.types';

const INITIAL_STATE = {
  activeCategory: {
    type: 'All',
    isCountry: false
  },
  countriesList: null,
  dishTypes: null
}

const categoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ACTIVE_CATEGORY:
      return {
        ...state,
        activeCategory: action.payload
      }

    case FETCH_COUNTRIES:
      return {
        ...state,
        countriesList: action.payload
      }

    case FETCH_DISH_TYPES:
      return {
        ...state,
        dishTypes: action.payload
      }

    default:
      return {
        ...state
      }
  }
}

export default categoryReducer;