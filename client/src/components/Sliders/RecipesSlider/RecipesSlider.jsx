import React, { useState, useEffect } from 'react';

// Redux
import { connect } from 'react-redux';
import { getRandomMultipleRecipes, getLatestRecipes } from '../../../redux/recipes/recipes.actions';

// Components
import SliderNavbar from './SliderNavbar';
import SliderContainer from './SliderContainer/SliderContainer';

// Bootstrap Components
import Container from 'react-bootstrap/Container';

const RecipesSlider = ({
  getLatestRecipes,
  getRandomMultipleRecipes,
  latestRecipes,
  randomMultiple
}) => {
  const [state, setState] = useState({
    showLatest: true,
    showRandom: false
  });

  useEffect(() => {
    if (state.showLatest) getLatestRecipes();
    if (state.showRandom) getRandomMultipleRecipes();
    // eslint-disable-next-line
  }, []);

  const handleSelect = (eventKey) => {
    if (eventKey === 'showLatest') {
      getLatestRecipes();
      setState({
        showLatest: true, showRandom: false
      });
    } else if (eventKey === 'showRandom') {
      getRandomMultipleRecipes();
      setState({
        showLatest: false, showRandom: true
      });
    }
  }

  return (
    <Container className='recipes-slider px-0 mb-5' fluid='xl'>
      <SliderNavbar
        handleSelect={handleSelect}
        activeKey={
          state.showLatest ? 'showLatest' :
            state.showRandom ? 'showRandom' : null
        }
      />
      {
        state.showLatest && <SliderContainer
          toShow={latestRecipes}
          activeKey={'showLatest'}
        />
      }
      {
        state.showRandom && <SliderContainer
          toShow={randomMultiple}
          activeKey={'showRandom'}
        />
      }
    </Container>
  )
}

const mapStateToProps = state => ({
  latestRecipes: state.recipes.latestRecipes,
  randomMultiple: state.recipes.randomMultiple
});

const mapDispatchToProps = dispatch => ({
  getLatestRecipes: () => dispatch(getLatestRecipes()),
  getRandomMultipleRecipes: () => dispatch(getRandomMultipleRecipes())
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipesSlider);
