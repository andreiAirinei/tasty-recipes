import {
  MODAL_OPEN_INGREDIENT,
  MODAL_CLOSE_INGREDIENT,
  SET_INGREDIENT
} from './ingredientModal.types';

export const modalOpenIngredient = () => dispatch => {
  dispatch({
    type: MODAL_OPEN_INGREDIENT
  })
}

export const closeModal = () => dispatch => {
  dispatch({
    type: MODAL_CLOSE_INGREDIENT
  });
}

export const setModalIngredient = ingredient => dispatch => {
  dispatch({
    type: SET_INGREDIENT,
    payload: ingredient
  })
};
