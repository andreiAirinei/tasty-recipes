import React from 'react';
import { connect } from 'react-redux';

// Components
import SIdebarLatestItem from './SidebarLatestItem';

const SidebarLatestRecipes = ({ latestRecipes, otherClasses = '' }) => {
  latestRecipes && console.log(latestRecipes);

  return (
    <div className={`sidebar-latest ${otherClasses}`}>
      <h5 className='text-center '><em>Latest</em></h5>
      <ul className='latest-list list-unstyled'>
        {
          latestRecipes.data && latestRecipes.data.map(recipe => (
            <li key={recipe.idMeal}>
              <SIdebarLatestItem
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
  latestRecipes: state.recipes.latestRecipes
});

export default connect(mapStateToProps)(SidebarLatestRecipes);
