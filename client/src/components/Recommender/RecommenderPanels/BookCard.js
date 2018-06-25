import React, { Component } from 'react';

class BookCard extends Component {
  render() {
    const { title, thumbnail, author } = this.props;

    return (
      <li className={`book-card`}>
        <div
          className="thumbnail"
          style={{ backgroundImage: `url(${thumbnail})` }}
        />
        <div className="book-details">
          <h4 className="title">{title}</h4>
          <h5 className="author">by {author}</h5>
        </div>
        {this.props.cardType === 'suggestion-card' ? (
          ''
        ) : (
          <h1 className="owned">+</h1>
        )}
      </li>
    );
  }
}

export default BookCard;
