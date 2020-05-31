import React from 'react';

// Components
import Jumbotron from '../components/Jumbotron/Jumbotron';
import CallToActionCard from '../components/CallToActionCard/CallToActionCard';

const IngredientsPage = () => {
  return (
    <div className='page-ingredients'>
      <Jumbotron imgURL='cooking3.jpg' title='INGREDIENTS' >
        <h2 className='text-white text-center hero-text'>Have a recipe in mind?</h2>
      </Jumbotron>
      <div className="white-space"></div>
    </div>
  )
}

export default IngredientsPage;
