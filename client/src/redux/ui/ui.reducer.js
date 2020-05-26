import { SET_TAB_TITLE } from './ui.types';

const INITIAL_STATE = {
  title: null,
  activeCollection: 'All'
};

const uiReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_TAB_TITLE:
      return {
        ...state,
        title: action.payload
      }

    default:
      return {
        ...state
      }
  }
}

export default uiReducer;