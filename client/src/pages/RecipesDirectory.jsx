import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// Components
import RecipePage from './RecipePage';
import CollectionDashboard from './CollectionDashboard';


const RecipesDirectory = ({ match }) => {
  console.log(match);
  return (
    <>
      <Switch>
        {/* <Route
          exact
          path={`${match.path}`}
          render={() => <Redirect to='/' />}
        /> */}
        <Route exact path={`${match.path}`} component={CollectionDashboard} />
        <Route path={`${match.path}/recipe`} component={RecipePage} />
      </Switch>
    </>
  )
}

export default RecipesDirectory;
