import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Bootstrap Components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ReactLogo from '../../assets/hamburger_menu.svg';

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
              <div className="navbar-menu--main d-none d-lg-block ">
                <Link to='/recipes' className='navbar-item text-dark font-weight-bold text-decoration-none l-spacing-1'>Recipes</Link>
                <Link to='/ingredients' className='navbar-item text-dark font-weight-bold text-decoration-none l-spacing-1 ml-4'>Ingredients</Link>
                <button><img src={ReactLogo} alt='Menu Toggler' /></button>

              </div>
            </Col>
          </Row>
        </Container>
      </nav>

      <div className="navbar-menu--sidebar d-block d-lg-none bg-light pt-5 pl-3">
        <Link to='/' className='d-block text-decoration-none'><h5 className='text-dark font-weight-bold l-spacing-1'>&rsaquo; HOME</h5></Link>
        <hr className='mr-3' />
        <Link to='/recipes' className='d-block text-decoration-none'><h5 className='text-dark l-spacing-1'>&rsaquo; Recipes</h5></Link>
        <hr className='mr-3' />
        <Link to='/ingredients' className='d-block text-decoration-none'><h5 className='text-dark l-spacing-1'>&rsaquo; Ingredients</h5></Link>
        <hr className='mr-3' />

      </div>
    </Fragment>
  )
}

export default Header;
