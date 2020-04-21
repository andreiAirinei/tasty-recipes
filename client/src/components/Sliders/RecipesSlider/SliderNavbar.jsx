import React from 'react';

// Bootstrap Components
import Nav from 'react-bootstrap/Nav';

const SliderNavbar = ({ activeKey, handleSelect }) => {

  return (
    <Nav variant="pills"
      defaultActiveKey={activeKey}
      className='slider-navbar my-4 justify-content-center'
      onSelect={handleSelect}>
      <Nav.Item>
        <Nav.Link
          eventKey='showLatest'
          className='py-1 l-spacing-2'
        >Latest
          </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          eventKey='showRandom'
          className='py-1 l-spacing-2'
        >Random
          </Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

export default SliderNavbar;
