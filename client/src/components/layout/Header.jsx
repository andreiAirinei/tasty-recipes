import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

// Bootstrap Components
import Container from 'react-bootstrap/Container';

const Header = () => {
  return (
    <Fragment>
      <nav className='header-navbar'>
        <Container fluid='xl'>
          <div className="navbar-content d-flex align-items-center justify-content-between pt-2 ">
            <div></div>
            <div className='brand'>
              <Link to='/'>
                <img src={require('../../assets/tasty-recipes-logo-orange.svg')} alt="Tasty Recipes Brand Logo" />
              </Link>
            </div>
            <div></div>
          </div>
        </Container>
      </nav>
    </Fragment>

  )
}

export default Header;
