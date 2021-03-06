import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import { loadUser } from '../../redux/auth/auth.actions';
import {
  openMobileMenu,
  closeMobileMenu
} from '../../redux/ui/ui.actions';

// Components
import LoginRegisterButtons from '../LoginRegisterButtons/LoginRegisterButtons';

// Bootstrap Components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ReactLogo from '../../assets/hamburger_menu.svg';

const Header = ({ loadUser, openMobileMenu, closeMobileMenu, isShowingMobileMenu }) => {
  const [classes, setClasses] = useState({
    header: '',
    logo: ''
  });

  useEffect(() => {
    // Load User on app refresh
    loadUser();
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
            <Col xs={8} lg={{ order: 2, span: 4 }} className={`brand px-0 mr-auto mx-lg-auto py-2 py-lg-1 ${classes.logo}`}>
              <Link to='/'>
                <img
                  src={require('../../assets/tasty-recipes-logo-orange.svg')}
                  alt="Tasty Recipes Brand Logo"
                />
              </Link>
            </Col>
            <Col xs={4} lg={{ order: 3, span: 4 }} className='text-right p-xl-0 d-flex align-items-center justify-content-end'>
              <Link to='/dashboard' className='navbar-item text-dark font-weight-bold text-decoration-none l-spacing-1 text-size-09 mr-5'>Dashboard</Link>
              <LoginRegisterButtons />
              <button onClick={openMobileMenu} className='btn btn-link d-block d-lg-none'>
                <img src={ReactLogo} alt='Menu Toggler' />
              </button>
            </Col>
            <Col xs={0} lg={{ order: 1, span: 4 }} className='py-lg-3 pl-3 pl-xl-1 '>
              <div className="navbar-menu--main d-none d-lg-block">
                <Link to='/' className='navbar-item text-dark font-weight-bold text-decoration-none l-spacing-1 text-size-09'>Home</Link>
                <Link to='/recipes' className='navbar-item text-dark font-weight-bold text-decoration-none l-spacing-1 ml-4 text-size-09'>Recipes</Link>
                <Link to='/ingredients' className='navbar-item text-dark font-weight-bold text-decoration-none l-spacing-1 ml-4 text-size-09'>Ingredients</Link>
                <Link to='/contact' className='navbar-item text-dark font-weight-bold text-decoration-none l-spacing-1 ml-4 text-size-09'>Contact</Link>
              </div>
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
        <Link to='/' onClick={closeMobileMenu} className='d-block text-decoration-none'><h5 className='text-dark l-spacing-1'>&rsaquo; Home</h5></Link>
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
  closeMobileMenu: () => dispatch(closeMobileMenu()),
  loadUser: () => dispatch(loadUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
