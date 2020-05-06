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
        <Col sm={{ order: 2, span: 5 }} lg={5}>
          <RecipeIngredients />
          <SidebarLatestRecipes otherClasses='ml-sm-5 mb-5 d-none d-sm-block' />
        </Col>
        <Col sm={{ order: 1, span: 7 }} lg={7} >
          <RecipeInstructions />
        </Col>
      </Row>
      <SidebarLatestRecipes otherClasses='d-block d-sm-none' />
    </div>
  )
}

export default RecipeContent;
