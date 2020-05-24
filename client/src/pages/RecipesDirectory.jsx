import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// Components
import RecipePage from './RecipePage';
import CollectionPage from './CollectionPage';


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
        <Route exact path={`${match.path}`} component={CollectionPage} />
        <Route path={`${match.path}/recipe`} component={RecipePage} />
      </Switch>
    </>
  )
}

export default RecipesDirectory;
