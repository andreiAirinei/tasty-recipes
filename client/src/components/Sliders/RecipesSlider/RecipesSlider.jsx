import React, { useState } from 'react';

// Redux
import { connect } from 'react-redux';

// Components
import SliderNavbar from '../SliderNavbar';
import SliderContainer from './SliderContainer/SliderContainer';
import LoadingSpinner from '../../layout/LoadingSpinner';

// Bootstrap Components
import Container from 'react-bootstrap/Container';

const RecipesSlider = ({ latestRecipes }) => {
  const [state, setState] = useState({
    showRandomRecipes: false,
    data: null,
    isLoading: false
  });

  const handleSelect = (eventKey) => {
    if (eventKey === 'showLatest') {
      setState({ ...state, showRandomRecipes: false });
    } else if (eventKey === 'showRandom') {
      // setState({ ...state, showRandomRecipes: true, isLoading: true });
      fetchRandomRecipes();
    }
  }

  const fetchRandomRecipes = async () => {
    setState({ ...state, isLoading: true });
    try {
      const res = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/randomselection.php`);
      const jsonData = await res.json();

      setState({
        ...state,
        showRandomRecipes: true,
        data: jsonData.meals,
        isLoading: false
      })
    } catch (err) {
      console.log(err.response.statusText);
    }
  }

  return (
    <Container className='recipes-slider px-0 mb-5' fluid='xl'>
      <SliderNavbar
        handleSelect={handleSelect}
        activeKey={
          state.showRandomRecipes ? 'showRandom' : 'showLatest'
        } />
      {

      }
      <SliderContainer toShow={state.showRandomRecipes ? state : latestRecipes} />

    </Container>
  )
}

const mapStateToProps = state => ({
  latestRecipes: state.recipes.latestRecipes
});

export default connect(mapStateToProps)(RecipesSlider);
