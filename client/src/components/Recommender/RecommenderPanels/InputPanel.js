import React, { Component } from 'react';
import throttle from 'lodash/throttle';
import axios from 'axios';
import { connect } from 'react-redux';
import { setSuggestions } from '../../../actions/bookActions';
class InputPanel extends Component {
  state = { userInput: '' };

  handleOnChange = e => {
    this.setState({ userInput: e.target.value }, () => this.getHints());
  };

  getHints = throttle(async () => {
    const results = await axios.get(
      `/api/book_search?query=${this.state.userInput.trim()}`
    );
    this.props.setSuggestions(results.data.items);
  }, 500);

  render() {
    return (
      <div className="input-panel panel">
        <div className="user-input-area">
          <input
            className="user-input"
            type="text"
            placeholder="Enter your favorite book"
            onChange={e => this.handleOnChange(e)}
            value={this.state.userInput}
          />
          <ul className="user-input-suggestions">
            {this.props.book.suggestionItems.map(book => {
              return (
                <li key={book.id} className="suggestion-item">
                  <img
                    className="thumbnail"
                    src={book.volumeInfo.imageLinks.smallThumbnail}
                  />
                  <h4 className="title">{book.volumeInfo.title}</h4>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ book }) {
  return { book };
}

export default connect(
  mapStateToProps,
  { setSuggestions }
)(InputPanel);
