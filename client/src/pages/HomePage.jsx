import React, { useEffect } from 'react';

// Redux
import { connect } from 'react-redux';
import { getLatestRecipes } from '../redux/recipes/recipes.actions';

// Components
import Jumbotron from '../components/Jumbotron/Jumbotron';
import RecipesSlider from '../components/Sliders/RecipesSlider/RecipesSlider';
import VideoBanner from '../components/VideoBanner/VideoBanner';
import VideoSlider from '../components/Sliders/VideoSlider/VideoSlider';
import VideoModal from '../components/VideoModal/VideoModal';

const HomePage = ({ getLatestRecipes }) => {
  useEffect(() => {
    getLatestRecipes();
  }, [getLatestRecipes]);

  return (
    <main className='homepage'>
      <Jumbotron fluid imgUrl='site1.jpg' />
      <RecipesSlider />
      <VideoBanner />
      <VideoSlider />
      <VideoModal />
    </main>
  )
}

const mapDispatchToProps = dispatch => ({
  getLatestRecipes: () => dispatch(getLatestRecipes())
});

export default connect(null, mapDispatchToProps)(HomePage);
