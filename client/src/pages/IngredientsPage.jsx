import React, { useEffect } from 'react';

// Redux
import { connect } from 'react-redux';
import { fetchAllIngredients } from '../redux/ingredients/ingredients.actions';

// Selectors
import { selectAllIngredients } from '../redux/ingredients/ingredients.selectors';

// Components
import Jumbotron from '../components/Jumbotron/Jumbotron';
import CallToActionCard from '../components/CallToActionCard/CallToActionCard';

// Bootstrap
import Container from 'react-bootstrap/Container';

const IngredientsPage = ({ fetchAllIngredients, allIngredients }) => {
  useEffect(() => {
    fetchAllIngredients();
  }, []);

  console.log(allIngredients);

  return (
    <div className='page-ingredients'>
      <Jumbotron imgURL='cooking3.jpg' title='Browse Ingredients' >
        {/* <h2 className='text-white text-center hero-text'>Have a recipe in mind?</h2> */}
      </Jumbotron>
      <Container fluid='xl'>
        {
          allIngredients && allIngredients.map(ingredient =>
            <li>{ingredient.strIngredient}</li>
          )
        }
      </Container>
      <div className="white-space"></div>
    </div>
  )
}

const mapStateToProps = state => ({
  allIngredients: selectAllIngredients(state)
});

export default connect(mapStateToProps, { fetchAllIngredients })(IngredientsPage);
