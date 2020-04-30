import React, { useEffect } from 'react';

// Redux
import { connect } from 'react-redux';
import { getLatestRecipes } from '../redux/recipes/recipes.actions';

// Components
import Jumbotron from '../components/Jumbotron/Jumbotron';
import RecipesSlider from '../components/Sliders/RecipesSlider';
import VideoBanner from '../components/VideoBanner/VideoBanner';
import VideoModal from '../components/VideoModal/VideoModal';
import SectionTitle from '../components/layout/SectionTitle';

const HomePage = ({ getLatestRecipes }) => {
  useEffect(() => {
    getLatestRecipes();
  }, [getLatestRecipes]);

  return (
    <main className='homepage'>
      <Jumbotron fluid imgUrl='site1.jpg' />
      <RecipesSlider />
      <VideoBanner />
      <SectionTitle title='Video Recipes' />
      <RecipesSlider isVideo />
      <VideoModal />
    </main>
  )
}

const mapDispatchToProps = dispatch => ({
  getLatestRecipes: () => dispatch(getLatestRecipes())
});

export default connect(null, mapDispatchToProps)(HomePage);
