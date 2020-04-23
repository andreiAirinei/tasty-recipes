import React, { useEffect } from 'react';

// Redux
import { connect } from 'react-redux';
import { getLatestRecipes, getRandomMultipleRecipes } from '../../../redux/recipes/recipes.actions';

// Components
import VideoSliderContainer from './VideoSliderContainer/VideoSliderContainer';

// Bootstrap Components
import Container from 'react-bootstrap/Container';

const VideoSlider = ({ getLatestRecipes, latestRecipes, getRandomMultipleRecipes, randomMultiple }) => {
  useEffect(() => {
    if (randomMultiple.data === null) getRandomMultipleRecipes();
  }, []);

  console.log(randomMultiple.data);

  return (
    <Container className='video-slider px-0 my-5' fluid='xl'>
      <h1 className='text-center'>Latest Videos</h1>
      <hr />
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
