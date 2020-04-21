import React from 'react';

// Redux
import { connect } from 'react-redux';
import { getLatestRecipes } from '../../../redux/recipes/recipes.actions';



// Bootstrap Components
import Container from 'react-bootstrap/Container';

const VideoSlider = ({
  getLatestRecipes,
  latestRecipes
}) => {
  return (
    <Container className='video-slider px-0 my-5' fluid='xl'>
      <h1 className='text-center'>Latest Videos</h1>
    </Container>
  )
}

const mapStateToProps = state => ({
  latestRecipes: state.recipes.latestRecipes
})

const mapDispatchToProps = dispatch => ({
  getLatestRecipes: () => dispatch(getLatestRecipes())
})

export default connect(mapStateToProps, mapDispatchToProps)(VideoSlider);
