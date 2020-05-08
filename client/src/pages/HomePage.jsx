import React, { useEffect } from 'react';

// Components
import Jumbotron from '../components/Jumbotron/Jumbotron';
import RecipesSlider from '../components/Sliders/RecipesSlider';
import VideoBanner from '../components/VideoBanner/VideoBanner';
import CategoriesContainer from '../components/CategoriesSection/CategoriesContainer';

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <main className='homepage'>
      <Jumbotron
        title='Looking for a tasty recipe?'
        imgURL='site1.jpg'
        underlay='tomatoes.jpg'
        withSearchbar />
      <RecipesSlider />
      <CategoriesContainer />
      <VideoBanner />
      <RecipesSlider title='Video Recipes' isVideo />
    </main>
  )
}

export default HomePage;
