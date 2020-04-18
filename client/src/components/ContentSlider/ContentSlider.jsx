import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

import { getRandomMultipleRecipes, getLatestRecipes } from '../../redux/recipes/recipes.actions';

// Components
import SliderItem from './SliderItem';
import CustomNextArrow from './CustomNextArrow';
import CustomPreviousArrow from './CustomPreviousArrow';
import SliderNavbar from './SliderNavbar';

// Bootstrap Components
import Container from 'react-bootstrap/Container';

const ContentSlider = ({ getRandomMultipleRecipes, getLatestRecipes, randomMultiple }) => {
  useEffect(() => {
    getRandomMultipleRecipes();

  }, []);

  return (
    <Container fluid='xl' className='px-0 mb-5'>
      <SliderNavbar />
      <Slider {...settings} className='content-slider'>
        {
          randomMultiple && randomMultiple.map(recipe =>
            <SliderItem
              key={recipe.idMeal}
              recipeID={recipe.idMeal}
              name={recipe.strMeal}
              category={recipe.strCategory}
              imgURL={recipe.strMealThumb}
            />
          )
        }
      </Slider>
    </Container>
  )
}

// Slider settings
const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4.5,
  slidesToScroll: 1,
  centerMode: true,
  nextArrow: <CustomNextArrow />,
  prevArrow: <CustomPreviousArrow />,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 3.5,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2.5
      }
    },
    {
      breakpoint: 560,
      settings: {
        slidesToShow: 1.5,
      }
    }
  ]
};

const mapStateToProps = state => ({
  randomMultiple: state.recipes.randomMultiple
});

const mapDispatchToProps = dispatch => ({
  getRandomMultipleRecipes: () => dispatch(getRandomMultipleRecipes()),
  getLatestRecipes: () => dispatch(getLatestRecipes())
})

export default connect(mapStateToProps, mapDispatchToProps)(ContentSlider);
