import React, { Fragment } from 'react';

// Components
import AppHelmet from './AppHelmet';
import Header from './Header';
import Footer from './Footer';

const Layout = (props) => {
  return (
    <Fragment>
      <AppHelmet />
      {/* Setting height of the page of minimum 100% of viewport height, thus removing white space 
      between Footer and browser's baseline */}
      <div className='d-flex flex-column min-vh-100'>
        <div className="flex-grow-1">
          <Header />
          {props.children}
        </div>
        <Footer />
      </div>
    </Fragment>
  )
}

export default Layout;
