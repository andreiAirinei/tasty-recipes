import React from 'react';

// Components
import Button from 'react-bootstrap/Button';

// Bootstrap Components
import Nav from 'react-bootstrap/Nav';

const SliderNavbar = () => {
  return (
    <div className='slider-navbar my-4 text-center'>
      <Button className='mx-1' variant='secondary' size='sm'>Latest</Button>
      <Button className='mx-1' variant='outline-secondary' size='sm' >Random</Button>
      <Button className='mx-1' variant='outline-secondary' size='sm'>Button3</Button>
      <Nav variant="pills" defaultActiveKey="/home" className='justify-content-center'>
        <Nav.Item>
          <Nav.Link href="/home" className='bg-secondary btn-sm py-1'>Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='btn-sm py-1' eventKey="link-1">Option 2</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='btn-sm py-1' eventKey="disabled" disabled>
            Disabled
      </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  )
}

export default SliderNavbar;
