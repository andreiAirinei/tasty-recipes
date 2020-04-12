import React, { Fragment, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { getLatestRecipes } from './redux/recipes/recipes.actions';

// Components
import Layout from './components/layout/Layout';

// Pages
import HomePage from './pages/HomePage';

const App = ({ getLatestRecipes }) => {
  useEffect(() => {
    getLatestRecipes();
  }, [])

  return (
    <Fragment>
      <Layout>
        <Switch>
          <Route exact path='/' component={HomePage} />
        </Switch>
      </Layout>
    </Fragment>
  );
}

export default connect(null, { getLatestRecipes })(App);
