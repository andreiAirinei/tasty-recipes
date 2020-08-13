import React from 'react';

// Bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const IngredientsGroup = React.forwardRef(({ ingredientGroup }, ref) => {

  return (
    <div className="list-by-letter mb-5">
      <h4 ref={ref} className='text-center mb-3'>{ingredientGroup[0]}</h4>
      <hr />
      {
        ingredientGroup[1].length < 1 && <em>No ingredients</em>
      }
      <Row>
        {
          ingredientGroup[1] && ingredientGroup[1].map(ingredient =>
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
})

export default IngredientsGroup;
