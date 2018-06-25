import { GET_ERRORS } from '../actions/types';
<<<<<<< HEAD
// import isEmpty from '../utils/is-empty';
=======
>>>>>>> de14426a653745c4e622e003827ca0261963aaf1

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ERRORS:
      return action.payload;
    default:
      return state;
  }
};
