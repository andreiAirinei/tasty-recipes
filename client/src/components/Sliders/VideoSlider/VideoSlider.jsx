import React, { useEffect } from 'react';

// Redux
import { connect } from 'react-redux';
import { getLatestRecipes, getRandomMultipleRecipes } from '../../../redux/recipes/recipes.actions';

// Components
import SectionTitle from '../../layout/SectionTitle';
import VideoSliderContainer from './VideoSliderContainer/VideoSliderContainer';
import SliderNavbar from '../RecipesSlider/SliderNavbar';

// Bootstrap Components
import Container from 'react-bootstrap/Container';

const VideoSlider = ({ getLatestRecipes, latestRecipes, getRandomMultipleRecipes, randomMultiple }) => {
  useEffect(() => {
    if (randomMultiple.data === null) getRandomMultipleRecipes();
    // eslint-disable-next-line
  }, []);

  return (
    <Container className='video-slider px-0 my-5' fluid='xl'>
      <SectionTitle title='Video Recipes' />
      {/* <SliderNavbar /> */}
      <VideoSliderContainer toShow={randomMultiple} />
    </Container>
  )
}

const mapStateToProps = state => ({
  latestRecipes: state.recipes.latestRecipes,
  randomMultiple: state.recipes.randomMultiple
})

const mapDispatchToProps = dispatch => ({
  getLatestRecipes: () => dispatch(getLatestRecipes()),
  getRandomMultipleRecipes: () => dispatch(getRandomMultipleRecipes())
})

export default connect(mapStateToProps, mapDispatchToProps)(VideoSlider);
