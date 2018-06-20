import {
  SET_INPUT_SUGGESTIONS,
  SET_SEARCH_IN_ACTION,
  SUBMIT_INPUT_TO_PANEL
} from './types';
import axios from 'axios';

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

export const submitInputToPanel = (bookName, bookAuthor) => async dispatch => {
  let res;
  try {
    res = await axios.post('/api/book_panel_submit', {
      bookName,
      bookAuthor
    });
  } catch (error) {
    console.log(error);
  }
};
