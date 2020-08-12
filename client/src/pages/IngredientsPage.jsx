import React, { useEffect } from 'react';

// Redux
import { connect } from 'react-redux';
import { fetchAllIngredients } from '../redux/ingredients/ingredients.actions';

// Components
import Jumbotron from '../components/Jumbotron/Jumbotron';
import IngredientsList from '../components/IngredientsList/IngredientsList';
import CallToActionCard from '../components/CallToActionCard/CallToActionCard';

// Bootstrap
import Container from 'react-bootstrap/Container';

const IngredientsPage = ({ fetchAllIngredients }) => {
  useEffect(() => {
    fetchAllIngredients();
  }, []);

  return (
    <div className='page-ingredients'>
      <Jumbotron imgURL='cooking3.jpg' title='Browse Ingredients' >
        {/* <h2 className='text-white text-center hero-text'>Have a recipe in mind?</h2> */}
      </Jumbotron>
      <Container fluid='xl'>
        <IngredientsList />
      </Container>
      <div className="white-space"></div>
    </div>
  )
}

export default connect(null, { fetchAllIngredients })(IngredientsPage);
