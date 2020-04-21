import React from 'react';

// Components
import Jumbotron from '../components/Jumbotron/Jumbotron';
import RecipesSlider from '../components/Sliders/RecipesSlider';
import VideoSlider from '../components/Sliders/VideoSlider';

const HomePage = () => {
  return (
    <main className='homepage'>
      <Jumbotron fluid imgUrl='site1.jpg' />
      <RecipesSlider />
      <VideoSlider />
    </main>
  )
}

export default HomePage;
