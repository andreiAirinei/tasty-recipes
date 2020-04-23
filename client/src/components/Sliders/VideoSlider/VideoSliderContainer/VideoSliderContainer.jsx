import React from 'react';

// Slick slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

// Components
import VideoSliderItem from './VideoSliderItem';
import CustomNextArrow from '../../customisations/CustomNextArrow';
import CustomPreviousArrow from '../../customisations/CustomPreviousArrow';
import LoadingSpinner from '../../../layout/LoadingSpinner';

const VideoSliderContainer = ({ toShow }) => {
  console.log(toShow)
  return (
    <div className='video-slider-container'>
      <Slider {...settings} >
        {
          toShow.data && toShow.data.map(recipe =>
            recipe.strYoutube && <VideoSliderItem
              key={recipe.idMeal}
              youtubeURL={recipe.strYoutube}
              title={recipe.strMeal}
              category={recipe.strCategory}
            />
          )
        }
      </Slider>
    </div>
  )
};

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3.7,
  slidesToScroll: 1,
  centerMode: true,
  initialSlide: 5,
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
    },
    {
      breakpoint: 380,
      settings: {
        slidesToShow: 1
      }
    }
  ]
};

export default VideoSliderContainer;
