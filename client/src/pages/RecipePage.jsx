import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// Components
import RecipeOverview from '../components/RecipeOverview/RecipeOverview';

// We don't need withRouter as we have 'match' prop from the App.jsx Route
const RecipePage = ({ match }) => {

  return (
    <div className='recipe-page'>
      <Route
        exact
        path={`${match.path}`}
        render={() => <Redirect to='/' />}
      />
      <Route
        path={`${match.path}/:recipeID`}
        component={RecipeOverview}
      />
    </div>
  )
};

export default RecipePage;
