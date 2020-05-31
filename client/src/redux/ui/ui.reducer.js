import {
  SET_TAB_TITLE,
  SET_INFINITY_LIST_SETTINGS
} from './ui.types';

const INITIAL_STATE = {
  title: null,
  infinityListSettings: {
    idxStart: 0,
    idxEnd: 12
  }
};

const uiReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_TAB_TITLE:
      return {
        ...state,
        title: action.payload
      }

    case SET_INFINITY_LIST_SETTINGS:
      return {
        ...state,
        infinityListSettings: action.payload
      }

    default:
      return {
        ...state
      }
  }
}

export default uiReducer;