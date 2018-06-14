import { SET_INPUT_SUGGESTIONS, SET_SEARCH_IN_ACTION } from '../actions/types';

const initialState = {
  suggestionItems: [],
  isSIA: false
};
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_INPUT_SUGGESTIONS:
      return {
        ...state,
        suggestionItems: action.payload
      };
    case SET_SEARCH_IN_ACTION:
      return {
        ...state,
        isSIA: action.payload
      };
    default:
      return state;
  }
};
