import { SET_TAB_TITLE } from './ui.types';

export const setTabTitle = (title) => dispatch => {
  dispatch({
    type: SET_TAB_TITLE,
    payload: title
  });
} 