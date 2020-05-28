import React from 'react';

// Components
import Searchbar from '../Searchbar/Searchbar';

// Bootstrap Components
import Container from 'react-bootstrap/Container';

const Jumbotron = ({ imgURL, title, withSearchbar = false }) => {
  const divStyle = { backgroundImage: 'url(' + require(`../../assets/${imgURL}`) + ')' };

  return (
    <Container fluid='xl' className='px-0'>
      <div className="curved-line" />
      <div className="hero d-flex justify-content-center align-items-center"
        style={divStyle}>
        <div className="hero-content px-2">
          <h1 className='hero-text text-white text-center'>{title}</h1>
          {withSearchbar && <Searchbar />}
        </div>
      </div>
    </Container>

  )
}

export default Jumbotron;
