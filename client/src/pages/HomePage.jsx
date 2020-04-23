import React from 'react';

// Components
import Jumbotron from '../components/Jumbotron/Jumbotron';
import RecipesSlider from '../components/Sliders/RecipesSlider/RecipesSlider';
import VideoSlider from '../components/Sliders/VideoSlider/VideoSlider';
import VideoModal from '../components/VideoModal/VideoModal';


const HomePage = () => {
  return (
    <main className='homepage'>
      <Jumbotron fluid imgUrl='site1.jpg' />
      <RecipesSlider />
      <VideoSlider />
      <VideoModal />
    </main>
  )
}

export default HomePage;
