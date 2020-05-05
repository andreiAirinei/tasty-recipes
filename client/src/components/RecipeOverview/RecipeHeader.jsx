import React from 'react';
import { connect } from 'react-redux';

// Bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import TimeAndDifficulty from '../TimeAndDifficulty/TimeAndDifficulty';

const RecipeHeader = ({ singleRecipe }) => {

  return (
    <div className='recipe-header'>
      {singleRecipe &&
        <Row >
          <Col xs={12} sm={5}>
            <Image
              src={singleRecipe.strMealThumb}
              thumbnail
              fluid
            />
          </Col>
          <Col xs={12} sm={7}>
            <div className="header-content">
              <div className="top">
                <h4 className='text-danger'>{singleRecipe.strCategory}</h4>
                <h1 className='font-weight-bold mb-5'>{singleRecipe.strMeal}</h1>
                <div className="d-flex align-items-center">
                  <img src={require(`../../assets/flags/${singleRecipe.strArea}.png`)}
                    alt={`${singleRecipe.strArea} flag`}
                    className='mr-4' />
                  <h6 className='m-0'><span className='font-weight-bold text-secondary l-spacing-1'>{singleRecipe.strArea}</span> delicious recipe</h6>
                </div>
              </div>
              <div className="bottom mt-5 d-flex align-items-center justify-content-between">
                <TimeAndDifficulty />
                <h6 className='font-italic text-right pt-2 mr-3'>
                  <a href={singleRecipe.strSource} className='text-info' target='_blank' rel='noreferrer'>Source</a>
                </h6>
              </div>
            </div>
          </Col>
        </Row>
      }
    </div>
  )
}

const mapStateToProps = state => ({
  singleRecipe: state.recipes.singleRecipe
});

export default connect(mapStateToProps)(RecipeHeader);
