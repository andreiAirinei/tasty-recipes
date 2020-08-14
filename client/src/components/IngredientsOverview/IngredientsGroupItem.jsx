import React from 'react';

// Redux
import { connect } from 'react-redux';
import {
  modalOpenIngredient,
  setModalIngredient
} from '../../redux/modals/ingredientModal/ingredientModal.actions';

// Bootstrap
import Col from 'react-bootstrap/Col';

const IngredientsGroupItem = ({
  modalOpenIngredient,
  setModalIngredient,
  ingredient
}) => {

  const handleClick = e => {
    // e.preventDefault();
    setModalIngredient(ingredient.strIngredient);
    modalOpenIngredient();
  }

  return (
    <Col xs={6} sm={3} key={ingredient.idIngredient} className='mb-2'>
      <button
        className='btn btn-link text-dark text-size-09'
        onClick={handleClick}
      >
        <img src=
          {`https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}-Small.png`}
          alt={''}
          className='ingredient-image mr-2'
        />
        <span className='text-size-09'>{ingredient.strIngredient}</span>
      </button>
    </Col>
  )
}

const mapDispatchToProps = dispatch => ({
  modalOpenIngredient: () => dispatch(modalOpenIngredient()),
  setModalIngredient: ingredient => dispatch(setModalIngredient(ingredient))
});

export default connect(null, mapDispatchToProps)(IngredientsGroupItem);
