import React from 'react';

// Components 
import RecipeInstructions from './RecipeInstructions';
import RecipeIngredients from './RecipeIngredients';
import SidebarLatestRecipes from '../../SidebarLatestRecipes/SidebarLatestRecipes';

// Bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const RecipeContent = () => {

  return (
    <div className='recipe-content'>
      <Row>
        <Col sm={5} lg={5}>
          <RecipeIngredients />
          <SidebarLatestRecipes otherClasses='pr-sm-5 mb-5' />
        </Col>
        <Col sm={7} lg={7}>
          <RecipeInstructions />
        </Col>
      </Row>
    </div>
  )
}

export default RecipeContent;
