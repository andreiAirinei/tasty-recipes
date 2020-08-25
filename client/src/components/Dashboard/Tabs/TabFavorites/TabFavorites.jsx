import React from 'react';

// Redux
import { connect } from 'react-redux';
import { addFavorite } from '../../../../redux/private/favorites/favorites.actions';

const TabFavorites = ({ addFavorite }) => {

  const handleFav = () => {
    addFavorite({
      recipeID: '53024'
    });
  }

  return (
    <div>
      <h1>Favorites</h1>
      <button onClick={handleFav}>NEED TO CHECK IF ADD TO FAVORITES IS WORKING</button>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  addFavorite: favorite => dispatch(addFavorite(favorite))
});

export default connect(null, mapDispatchToProps)(TabFavorites);
