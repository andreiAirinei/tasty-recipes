import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import Layout from './components/layout/Layout';

// Pages
import HomePage from './pages/HomePage';
import MealPage from './pages/MealPage';

const App = () => {

  return (
    <Fragment>
      <Layout>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/meal' component={MealPage} />
        </Switch>
      </Layout>
    </Fragment>
  );
}

export default App;
