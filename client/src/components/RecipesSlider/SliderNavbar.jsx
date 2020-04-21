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
          // active={state.button1}
          className='py-1 l-spacing-2'
        // className={`btn-sm py-1 color-1 ${state.button1 && 'btn-secondary'}`}
        >Latest
          </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          eventKey='showRandom'
          // active={state.button2}
          className='py-1 l-spacing-2'
        // className={`btn-sm py-1 color-1 ${state.button2 && 'btn-primary'}`}
        >Random
          </Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

export default SliderNavbar;
