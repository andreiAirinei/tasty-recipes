import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import {
  openMobileMenu,
  closeMobileMenu
} from '../../redux/ui/ui.actions';

// Bootstrap Components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ReactLogo from '../../assets/hamburger_menu.svg';

const Header = ({ openMobileMenu, closeMobileMenu, isShowingMobileMenu }) => {
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
      <nav className={`header-navbar sticky-top bg-white mt-lg-4 ${classes.header}`}>
        <Container fluid='xl'>
          <Row className='align-items-center'>
            <Col xs='0' lg='4'></Col>
            <Col xs='4' className={`brand ml-auto mx-lg-auto ${classes.logo}`}>
              <Link to='/'>
                <img
                  src={require('../../assets/tasty-recipes-logo-orange.svg')}
                  alt="Tasty Recipes Brand Logo"
                />
              </Link>
            </Col>
            <Col xs='4' className='py-3 d-none d-lg-block'>
              <div className="navbar-menu--main">
                <Link to='/recipes' className='navbar-item text-dark font-weight-bold text-decoration-none l-spacing-1'>Recipes</Link>
                <Link to='/ingredients' className='navbar-item text-dark font-weight-bold text-decoration-none l-spacing-1 ml-4'>Ingredients</Link>
              </div>
            </Col>
            <Col xs='4' className='d-lg-none py-2 text-right'>
              <button onClick={openMobileMenu} className='btn btn-link'>
                <img src={ReactLogo} alt='Menu Toggler' />
              </button>
            </Col>
          </Row>
        </Container>
        {isShowingMobileMenu && <div onClick={closeMobileMenu} className="header-navbar--overlay" />}
      </nav>

      <div className={`navbar-menu--sidebar bg-light pt-2 pl-3 ${isShowingMobileMenu && 'isActive'}`}>
        <div className="close-menu text-right mb-3">
          <button onClick={closeMobileMenu} className='btn btn-light btn-large close-btn p-0 mr-1'>
            <h1 className='m-0 px-3'>&times;</h1>
          </button>
        </div>
        <Link to='/' onClick={closeMobileMenu} className='d-block text-decoration-none'><h5 className='text-dark font-weight-bold l-spacing-1'>&rsaquo; HOME</h5></Link>
        <hr className='mr-3' />
        <Link to='/recipes' onClick={closeMobileMenu} className='d-block text-decoration-none'><h5 className='text-dark l-spacing-1'>&rsaquo; Recipes</h5></Link>
        <hr className='mr-3' />
        <Link to='/ingredients' onClick={closeMobileMenu} className='d-block text-decoration-none'><h5 className='text-dark l-spacing-1'>&rsaquo; Ingredients</h5></Link>
        <hr className='mr-3' />
      </div>

    </Fragment>
  )
}

const mapStateToProps = state => ({
  isShowingMobileMenu: state.ui.isShowingMobileMenu
});

const mapDispatchToProps = dispatch => ({
  openMobileMenu: () => dispatch(openMobileMenu()),
  closeMobileMenu: () => dispatch(closeMobileMenu())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
