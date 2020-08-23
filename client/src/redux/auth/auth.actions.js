import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS
} from './auth.types';

// Load User
export const loadUser = () => async dispatch => {
  console.log('HERE 1');
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  console.log('HERE 2');
  try {
    console.log('HERE 3');
    const res = await axios.get('/api/auth');
    dispatch({ type: USER_LOADED, payload: res.data });
    console.log('HERE 4');

  } catch (err) {
    dispatch({ type: AUTH_ERROR });
  }
};

// Register User
export const register = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.post('api/users', formData, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
    debugger;
    console.log('REG SUCCESS');
    dispatch(loadUser());
    console.log('REG 2');
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL,
      payload: err.response.data.msg
    })
  }
}