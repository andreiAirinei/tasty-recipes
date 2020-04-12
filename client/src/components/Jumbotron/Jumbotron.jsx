import React from 'react';

// Bootstrap Components
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

const Jumbotron = ({ imgUrl }) => {
  const divStyle = { backgroundImage: 'url(' + require(`../../assets/${imgUrl}`) + ')' };

  return (
    <div className="hero d-flex justify-content-center align-items-center"
      style={divStyle}>
      <div className="hero-content">
        <h1 className='hero-text text-white font-weight-bold'>Looking for a tasty recipe?</h1>
        <InputGroup size='lg' className="mb-3 py-3">
          <FormControl
            placeholder="Search..."
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <InputGroup.Text id="basic-addon2">GO</InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
      </div>
    </div>
  )
}

export default Jumbotron;
