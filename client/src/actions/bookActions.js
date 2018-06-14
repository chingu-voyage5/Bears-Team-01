import { SET_INPUT_SUGGESTIONS } from './types';

export const setSuggestions = suggestionItems => {
  return {
    type: SET_INPUT_SUGGESTIONS,
    payload: suggestionItems
  };
};
