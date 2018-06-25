import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookCard from './BookCard';

class SuggestionPanel extends Component {
  render() {
    return (
      <div className="suggestion-panel panel">
        <h1 className="panel-heading">Our Recommendations</h1>
        <ul className="suggestion-list">
          {this.props.book.recommendedList.map(book => (
            <li>{<BookCard {...book} cardType="suggestion-card" />}</li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ book }) {
  return { book };
}

export default connect(mapStateToProps)(SuggestionPanel);
