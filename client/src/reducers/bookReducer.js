import { SET_INPUT_SUGGESTIONS } from '../actions/types';
import isEmpty from '../utils/is-empty';

const initialState = {
  suggestionItems: []
};
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_INPUT_SUGGESTIONS:
      return {
        ...state,
        suggestionItems: action.payload
      };
    default:
      return state;
  }
};
