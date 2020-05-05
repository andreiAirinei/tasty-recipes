import React from 'react';
import { connect } from 'react-redux';

// Bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const RecipeContent = ({ singleRecipe }) => {
  return (
    <div className='recipe-content'>
      {singleRecipe &&
        <Row>
          <Col sm={5}>Ingredients</Col>
          <Col sm={7}><p>{singleRecipe.strInstructions}</p></Col>
        </Row>

      }

    </div>
  )
}

const mapStateToProps = state => ({
  singleRecipe: state.recipes.singleRecipe
});

export default connect(mapStateToProps)(RecipeContent);
