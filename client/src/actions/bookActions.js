import { SET_INPUT_SUGGESTIONS, SET_SEARCH_IN_ACTION } from './types';

export const setSuggestions = suggestionItems => {
  return {
    type: SET_INPUT_SUGGESTIONS,
    payload: suggestionItems
  };
};

export const setSearchInAction = isSIA => {
  return {
    type: SET_SEARCH_IN_ACTION,
    payload: isSIA
  };
};
