import React, { useState, useEffect } from 'react';

// Redux
import { connect } from 'react-redux';

// Components
import SliderNavbar from './SliderNavbar';
import SliderContainer from './SliderContainer/SliderContainer';
import VideoSliderContainer from './VideoSliderContainer/VideoSliderContainer';
import SectionTitle from '../layout/SectionTitle';

// Bootstrap Components
import Container from 'react-bootstrap/Container';

const RecipesSlider = ({ latestRecipes, title, isVideo = false }) => {
  const [state, setState] = useState({
    showRandomRecipes: null,
    data: null,
    isLoading: false
  });

  useEffect(() => {
    if (state.showRandomRecipes) fetchRandomRecipes();
  }, [state.isLoading]);

  const handleSelect = (eventKey) => {
    if (eventKey === 'showLatest') {
      setState({ ...state, showRandomRecipes: false });
    } else if (eventKey === 'showRandom') {
      setState({ ...state, showRandomRecipes: true, isLoading: true });
    }
  }

  const fetchRandomRecipes = async () => {
    console.log(state.showRandomRecipes, state.isLoading);
    try {
      const res = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/randomselection.php`);
      const jsonData = await res.json();

      setState({
        ...state,
        data: jsonData.meals,
        isLoading: false
      })
    } catch (err) {
      console.log(err.response.statusText);
    }
  }

  return (
    <Container className='recipes-slider px-0 mb-5' fluid='xl'>
      {title && <SectionTitle title={title} />}
      <SliderNavbar
        handleSelect={handleSelect}
        activeKey={
          state.showRandomRecipes ? 'showRandom' : 'showLatest'
        } />
      {
        isVideo ? <VideoSliderContainer toShow={state.showRandomRecipes ? state : latestRecipes} /> :
          <SliderContainer toShow={state.showRandomRecipes ? state : latestRecipes} />
      }
    </Container>
  )
}

const mapStateToProps = state => ({
  latestRecipes: state.recipes.latestRecipes
});

export default connect(mapStateToProps)(RecipesSlider);
