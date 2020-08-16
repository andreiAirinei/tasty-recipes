import {
  OPEN_MODAL_CREDENTIALS,
  CLOSE_MODAL_CREDENTIALS,
} from './credentialsModal.types';

export const openModalCredentials = () => dispatch => {
  dispatch({
    type: OPEN_MODAL_CREDENTIALS
  });
};

export const closeModalCredentials = () => dispatch => {
  dispatch({
    type: CLOSE_MODAL_CREDENTIALS
  });
};