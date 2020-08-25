import axios from 'axios';

import {
  ADD_FAVORITE
} from './favorites.types';

export const addFavorite = favorite => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.post('/api/favorites', favorite, config);

    dispatch({
      type: ADD_FAVORITE,
      payload: res.data
    });
  } catch (err) {
    console.error(err.message);
  }
};