import React from 'react';
import { connect } from 'react-redux';

// Components
import ShareButtons from '../layout/ShareButtons';
import TimeAndDifficulty from '../TimeAndDifficulty/TimeAndDifficulty';

// Bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


const RecipeHeader = ({ singleRecipe }) => {

  return (
    <div className='recipe-header'>
      {singleRecipe &&
        <Row >
          <Col xs={12} sm={5}>
            <div className="recipe-image-holder mx-auto">
              <Image
                src={singleRecipe.strMealThumb}
                thumbnail
                fluid
              />
            </div>
          </Col>
          <Col xs={12} sm={7}>
            <div className="header-content">
              <div className="top text-center text-sm-left mt-3">
                <h4 className='text-danger'>{singleRecipe.strCategory}</h4>
                <h1 className='font-weight-bold mb-4 mb-sm-5'>{singleRecipe.strMeal}</h1>
                <div className="d-flex justify-content-center justify-content-sm-start align-items-center">
                  <img src={require(`../../assets/flags/${singleRecipe.strArea}.png`)}
                    alt={`${singleRecipe.strArea} flag`}
                    className='mr-4' />
                  <h6 className='m-0'>Delicious <span className='font-weight-bold text-secondary l-spacing-1'>{singleRecipe.strArea}</span> recipe</h6>
                </div>
              </div>
              <div className="bottom mt-4 mt-sm-5 d-flex flex-column flex-md-row align-items-center justify-content-between">
                <TimeAndDifficulty />
                <div className="social-media text-right d-flex align-items-center mt-3 mt-md-0">
                  <p className='font-italic text-right mr-3 my-auto'>
                    <abbr title='HyperText Markup Language'>
                      <a href={singleRecipe.strSource} className='text-info' target='_blank' rel='noreferrer'>Source</a>
                    </abbr>
                  </p>
                  <ShareButtons size={20} shareURL='www.google.co.uk' />
                </div>
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
