import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Bootstrap Components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Header = () => {
  const [classes, setClasses] = useState({
    header: '',
    logo: ''
  });

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setClasses({
        header: 'header-on-scroll',
        logo: 'logo-on-scroll'
      });
    } else {
      setClasses({
        header: '',
        logo: ''
      });
    }
  }

  return (
    <Fragment>
      <nav className={`header-navbar sticky-top bg-white mt-4 ${classes.header}`}>
        <Container fluid='xl'>
          <Row className='align-items-center'>
            <Col xs='4' ></Col>
            <Col xs='4' className={`brand mx-auto ${classes.logo}`}>
              <Link to='/'>
                <img
                  src={require('../../assets/tasty-recipes-logo-orange.svg')}
                  alt="Tasty Recipes Brand Logo"
                />
              </Link>
            </Col>
            <Col xs='4' className='py-3'>
              <Link to='/recipes' className='navbar-item text-dark font-weight-bold text-decoration-none l-spacing-1'>Recipes</Link>
              <Link to='/ingredients' className='navbar-item text-dark font-weight-bold text-decoration-none l-spacing-1 ml-4'>Ingredients</Link>
            </Col>
          </Row>
        </Container>
      </nav>
    </Fragment>

  )
}

export default Header;
