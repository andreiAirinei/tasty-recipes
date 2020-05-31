import React from 'react';
import { connect } from 'react-redux';

// Selectors
import { selectLatestRecipes } from '../../redux/recipes/recipes.selectors';

// Components
import SidebarLatestItem from './SidebarLatestItem';

const SidebarLatestRecipes = ({ latestRecipes, otherClasses = '' }) => {

  return (
    <div className={`sidebar-latest ${otherClasses}`}>
      <h5 className='text-center text-sm-left'><em>Latest</em></h5>
      <ul className='latest-list list-unstyled'>
        {
          latestRecipes.data && latestRecipes.data.map(recipe => (
            <li key={recipe.idMeal}>
              <SidebarLatestItem
                recipeID={recipe.idMeal}
                name={recipe.strMeal}
                category={recipe.strCategory}
                imageURL={recipe.strMealThumb} />
            </li>
          ))
        }
      </ul>
    </div>
  )
}

const mapStateToProps = state => ({
  latestRecipes: selectLatestRecipes(state)
});

export default connect(mapStateToProps)(SidebarLatestRecipes);
