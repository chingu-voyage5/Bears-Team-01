import { GET_ERRORS } from '../actions/types';
// import isEmpty from '../utils/is-empty';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ERRORS:
      return action.payload;
    default:
      return state;
  }
};
