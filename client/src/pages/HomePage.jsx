import React, { useEffect } from 'react';

// Redux
import { connect } from 'react-redux';
import { getLatestRecipes } from '../redux/recipes/recipes.actions';

// Components
import Jumbotron from '../components/Jumbotron/Jumbotron';
import RecipesSlider from '../components/Sliders/RecipesSlider';
import VideoBanner from '../components/VideoBanner/VideoBanner';
import VideoModal from '../components/VideoModal/VideoModal';
import CategoriesContainer from '../components/CategoriesSection/CategoriesContainer';

const HomePage = ({ getLatestRecipes }) => {
  useEffect(() => {
    getLatestRecipes();
  }, [getLatestRecipes]);

  return (
    <main className='homepage'>
      <Jumbotron
        title='Looking for a tasty recipe?'
        imgUrl='site1.jpg'
        underlay='tomatoes.jpg'
        withSearchbar />
      <RecipesSlider />
      <CategoriesContainer />
      <VideoBanner />
      <RecipesSlider title='Video Recipes' isVideo />
      <VideoModal />
    </main>
  )
}

const mapDispatchToProps = dispatch => ({
  getLatestRecipes: () => dispatch(getLatestRecipes())
});

export default connect(null, mapDispatchToProps)(HomePage);
