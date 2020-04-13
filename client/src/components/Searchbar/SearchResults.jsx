import React from 'react';

const SearchResults = ({ filteredRecipes }) => {
  return (
    <div className="results bg-white">
      <ul className='results-list list-unstyled'>
        {
          filteredRecipes.length ? filteredRecipes.map(recipe => <li key={recipe.idMeal}>{recipe.strMeal}</li>)
            : <p className='text-center font-italic'>No recipes found.</p>
        }
        {/* {
          filteredRecipes.length === 0 && <li className='text-center'>No recipes found.</li>
        } */}
      </ul>
    </div>
  )
}

export default SearchResults;
