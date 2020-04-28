import React from 'react';

// Components
import CallToActionCard from '../CallToActionCard/CallToActionCard';

// Bootstrap
import Container from 'react-bootstrap/Container';

const VideoBanner = () => {
  return (
    <div className='video-banner d-flex align-items-center'>
      <div className="video d-flex align-items-center">
        <video className='clip' autoPlay muted loop >
          <source src={require('../../assets/videos/tasty-buns.mp4')} type='video/mp4' />
        </video>
      </div>
      <Container className='banner-container'>
        <CallToActionCard />
      </Container>
    </div>
  )
}

export default VideoBanner;
