import React, { Component } from 'react';
import throttle from 'lodash/throttle';
import axios from 'axios';
import { connect } from 'react-redux';
import {
  setSuggestions,
  setSearchInAction,
  submitInputToPanel
} from '../../../actions/bookActions';
import get from 'lodash/get';
class InputPanel extends Component {
  state = { userInput: '' };

  handleOnChange = e => {
    this.setState({ userInput: e.target.value }, () => this.getHints());
  };

  handleSuggestionItemOnClick = book => {
    console.log(book);
    console.log(book.volumeInfo.title);
    this.props.submitInputToPanel(
      get(book, 'volumeInfo.title', ''),
      get(book, 'volumeInfo.authors[0]', '')
    );
  };

  getHints = throttle(async () => {
    const results = await axios.get(
      `/api/book_search?query=${this.state.userInput.trim()}`
    );
    this.props.setSuggestions(results.data.items);
  }, 1000);

  render() {
    return (
      <div
        className={`input-panel panel ${
          this.props.book.isSIA ? 'searching' : 'not-searching'
        }`}
      >
        <div className="user-input-area">
          <input
            className="user-input-box"
            type="text"
            placeholder="Enter your favorite book"
            onFocus={() => {
              this.props.setSearchInAction(true);
            }}
            onBlur={() => {
              this.props.setSearchInAction(false);
              this.props.setSuggestions([]);
              this.setState({ userInput: '' });
            }}
            onChange={e => this.handleOnChange(e)}
            value={this.state.userInput}
          />
          <ul className="user-input-suggestions">
            {this.props.book.suggestionItems.map(book => {
              return (
                <li
                  key={book.id}
                  className="suggestion-item"
                  onMouseDown={e => {
                    this.handleSuggestionItemOnClick(book);
                    this.props.setSearchInAction(false);
                  }}
                >
                  <img
                    className="thumbnail"
                    src={get(
                      book,
                      'volumeInfo.imageLinks.smallThumbnail',
                      'https://cdn.pixabay.com/photo/2018/01/03/09/09/book-3057901_960_720.png'
                    )}
                    alt="Book Cover"
                  />
                  <h4 className="title">{book.volumeInfo.title}</h4>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="background-fader" />
      </div>
    );
  }
}

function mapStateToProps({ book }) {
  return { book };
}

export default connect(
  mapStateToProps,
  { setSuggestions, setSearchInAction, submitInputToPanel }
)(InputPanel);
