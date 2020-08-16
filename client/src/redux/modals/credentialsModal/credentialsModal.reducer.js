import {
  OPEN_MODAL_CREDENTIALS,
  CLOSE_MODAL_CREDENTIALS
} from './credentialsModal.types';

const INITIAL_STATE = {
  isActive: false
};

const credentialsModalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case OPEN_MODAL_CREDENTIALS:
      return {
        ...state,
        isActive: true
      }

    case CLOSE_MODAL_CREDENTIALS:
      return {
        ...state,
        isActive: false
      }

    default:
      return {
        ...state
      }
  }
};

export default credentialsModalReducer;