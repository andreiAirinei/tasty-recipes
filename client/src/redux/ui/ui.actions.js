import { SET_TAB_TITLE, SET_INFINITY_LIST_SETTINGS } from './ui.types';

export const setTabTitle = (title) => dispatch => {
  dispatch({
    type: SET_TAB_TITLE,
    payload: title
  });
};

export const setInfinityListSettings = (settings) => dispatch => {
  dispatch({
    type: SET_INFINITY_LIST_SETTINGS,
    payload: settings
  })
}