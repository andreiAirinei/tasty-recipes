import React from 'react';
import ReactLogo from '../../assets/tasty-recipes-logo-orange.svg'

// Bootstrap
import Button from 'react-bootstrap/Button';

const CallToActionCard = ({ withLogo = false }) => {
  return (
    <div className="cta-card p-3 mx-auto box-shadow">
      <div className="inner-box p-5 text-center">
        <h4><span className='font-weight-bold'>Create</span> your own</h4>
        {
          withLogo &&
          <img src={ReactLogo} alt="Chef Hat" className='d-block mx-auto tasty-logo my-3' />
        }
        <Button variant='danger' className='px-4 mt-3 l-spacing-1 text-uppercase' >Join now!</Button>
      </div>
    </div>
  )
}

export default CallToActionCard;
