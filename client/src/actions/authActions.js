import { REGISTER_USER, SET_CURRENT_USER } from './types';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

export const registerUser = userData => dispatch => {
  console.log(userData);
  axios
    .post('api/users/register', userData)
    .then(res => {
      console.log(res.data);
    })
    .catch(err => console.log(err));
};

export const loginUser = userData => dispatch => {
  axios.post('/api/users/login', userData).then(res => {
    const { token } = res.data;
    localStorage.setItem('jwtToken', token);
    setAuthToken(token);
    const decoded = jwt_decode(token);
    console.log(decoded);
    dispatch(setCurrentUser(decoded));
  });
};

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

export const logoutUser = () => dispatch => {
  localStorage.removeItem('jwtToken');
  setAuthToken(false);
  dispatch(setCurrentUser({}));
};
