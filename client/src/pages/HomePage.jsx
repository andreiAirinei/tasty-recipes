import React from 'react';

// Components
import Jumbotron from '../components/Jumbotron/Jumbotron';
import RecipesSlider from '../components/RecipesSlider/RecipesSlider'
import LoadingSpinner from '../components/layout/LoadingSpinner';

const HomePage = () => {
  return (
    <main className='homepage'>
      <Jumbotron fluid imgUrl='site1.jpg' />
      <RecipesSlider />
    </main>
  )
}

export default HomePage;
