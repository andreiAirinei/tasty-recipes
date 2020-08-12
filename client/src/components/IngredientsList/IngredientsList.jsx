import React from 'react';

// Redux & Selectors
import { connect } from 'react-redux';
import {
  selectIngredientsGroupedAlphabetically
} from '../../redux/ingredients/ingredients.selectors';

// Bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const IngredientsList = ({ ingredientsByGroup }) => {
  return (
    <div className='ingredients-list mt-5'>
      {
        Object.entries(ingredientsByGroup).map(
          (prop, idx) => (
            <div className="list-by-letter mb-5" key={idx}>
              <h4 className='text-center text-primary mb-3'>{prop[0]}</h4>
              <hr />
              <Row>
                {
                  prop[1] && prop[1].map(ingredient =>
                    <Col xs={6} sm={3} key={ingredient.idIngredient} className='mb-2'>
                      <img src=
                        {`https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}-Small.png`}
                        alt={ingredient.strIngredient}
                        className='ingredient-image mr-2'
                      />
                      <span className='text-size-09'>{ingredient.strIngredient}</span>
                    </Col>
                  )
                }
              </Row>
            </div>
          )
        )
      }
    </div>
  )
}

const mapStateToProps = state => ({
  ingredientsByGroup: selectIngredientsGroupedAlphabetically(state)
})

export default connect(mapStateToProps)(IngredientsList);
