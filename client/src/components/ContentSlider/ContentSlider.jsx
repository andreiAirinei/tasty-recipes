import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

import { getRandomMultipleRecipes } from '../../redux/recipes/recipes.actions';

// Components
import SliderItem from './SliderItem';
import CustomNextArrow from './CustomNextArrow';
import CustomPreviousArrow from './CustomPreviousArrow';

// Bootstrap Components
import Container from 'react-bootstrap/Container';

const ContentSlider = ({ getRandomMultipleRecipes, randomMultiple }) => {
  useEffect(() => {
    getRandomMultipleRecipes();
  }, []);

  const handleItemClick = (e) => {
    console.log(e.target);
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

  return (
    <Container fluid='xl' className='px-0 my-5'>
      <Slider {...settings} className='content-slider'>
        {
          randomMultiple && randomMultiple.map(recipe =>
            <SliderItem
              key={recipe.idMeal}
              recipeID={recipe.idMeal}
              name={recipe.strMeal}
              category={recipe.strCategory}
              imgURL={recipe.strMealThumb}
              onClick={handleItemClick} />
          )
        }
        {/* <SliderItem
          name='Soy Glazed Meatloves with Wasabi Mashed Potatoes & Roasted Carrots'
          imgURL='https://www.themealdb.com/images/media/meals/kvbotn1581012881.jpg'
          category='Ceva Bun'
        /> */}
      </Slider>
    </Container>
  )
}

const mapStateToProps = state => ({
  randomMultiple: state.recipes.randomMultiple
});

const mapDispatchToProps = dispatch => ({
  getRandomMultipleRecipes: () => dispatch(getRandomMultipleRecipes())
})

export default connect(mapStateToProps, mapDispatchToProps)(ContentSlider);
