import {
  SET_INPUT_SUGGESTIONS,
  SET_SEARCH_IN_ACTION,
  GET_USER_BOOKS
} from '../actions/types';

const initialState = {
  suggestionItems: [],
  currentList: [],
  recommendedList: [],
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
    case GET_USER_BOOKS:
      return {
        ...state,
        currentList: action.payload.currentList,
        recommendedList: action.payload.recommendedList
      };
    default:
      return state;
  }
};
