import React, { Fragment, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import { getLatestRecipes } from './redux/recipes/recipes.actions';

// Components
import Layout from './components/layout/Layout';
import CredentialsModal from './components/Modals/CredentialsModal/CredentialsModal';
import IngredientsModal from './components/Modals/IngredientModal/IngredientModal';
import VideoModal from './components/Modals/VideoModal/VideoModal';

// Pages
import HomePage from './pages/HomePage';
import RecipesDirectory from './pages/RecipesDirectory';
import IngredientsPage from './pages/IngredientsPage';

const App = ({ getLatestRecipes }) => {
  useEffect(() => {
    getLatestRecipes();
  }, [getLatestRecipes]);

  return (
    <Fragment>
      <Layout>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/recipes' component={RecipesDirectory} />
          <Route path='/ingredients' component={IngredientsPage} />
        </Switch>
      </Layout>
      <CredentialsModal />
      <IngredientsModal />
      <VideoModal />
    </Fragment>
  );
}

const mapDispatchToProps = dispatch => ({
  getLatestRecipes: () => dispatch(getLatestRecipes())
});

export default connect(null, mapDispatchToProps)(App);
