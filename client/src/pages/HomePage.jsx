import React from 'react';

// Components
import Jumbotron from '../components/Jumbotron/Jumbotron';
import ContentSlider from '../components/ContentSlider/ContentSlider';

const HomePage = () => {
  return (
    <main className='homepage'>
      <Jumbotron fluid imgUrl='site1.jpg' />
      <ContentSlider />
    </main>
  )
}

export default HomePage;
