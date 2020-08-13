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
    // eslint-disable-next-line
  }, []);

  return (
    <div className='page-ingredients'>
      <Jumbotron imgURL='cooking3.jpg' title='Browse Ingredients' >
        <h5 className='text-white text-center hero-text'>
          Find recipes by your favorite ingredient!
        </h5>
      </Jumbotron>
      <Container fluid='xl'>
        <IngredientsList />
      </Container>
    </div>
  )
}

export default connect(null, { fetchAllIngredients })(IngredientsPage);
