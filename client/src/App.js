import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import Layout from './components/layout/Layout';
// import VideoModal from './components/VideoModal/VideoModal';

// Pages
import HomePage from './pages/HomePage';
import RecipePage from './pages/RecipePage';

const App = () => {

  return (
    <Fragment>
      <Layout>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/recipe' component={RecipePage} />
        </Switch>
      </Layout>
      {/* <VideoModal /> */}
    </Fragment>
  );
}

export default App;
