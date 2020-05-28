import {
  FETCH_COUNTRIES,
  FETCH_DISH_TYPES
} from './category.types';

const INITIAL_STATE = {
  activeCategory: {
    type: 'British',
    isCountry: true
  },
  countriesList: null,
  dishTypes: null
}

const categoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
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