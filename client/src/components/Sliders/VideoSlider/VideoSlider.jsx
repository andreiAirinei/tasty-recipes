import React, { useEffect } from 'react';

// Redux
import { connect } from 'react-redux';
import { getRandomMultipleRecipes } from '../../../redux/recipes/recipes.actions';

// Components
import SectionTitle from '../../layout/SectionTitle';
import VideoSliderContainer from './VideoSliderContainer/VideoSliderContainer';
import SliderNavbar from '../SliderNavbar';

// Bootstrap Components
import Container from 'react-bootstrap/Container';

const VideoSlider = ({ latestRecipes, getRandomMultipleRecipes, randomMultiple }) => {
  useEffect(() => {
    if (randomMultiple.data === null) getRandomMultipleRecipes();
    // eslint-disable-next-line
  }, []);

  return (
    <Container className='video-slider px-0 my-5' fluid='xl'>
      <SectionTitle title='Video Recipes' />
      {/* <SliderNavbar /> */}
      <VideoSliderContainer toShow={latestRecipes} />
    </Container>
  )
}

const mapStateToProps = state => ({
  latestRecipes: state.recipes.latestRecipes,
  randomMultiple: state.recipes.randomMultiple
})

const mapDispatchToProps = dispatch => ({
  getRandomMultipleRecipes: () => dispatch(getRandomMultipleRecipes())
})

export default connect(mapStateToProps, mapDispatchToProps)(VideoSlider);
