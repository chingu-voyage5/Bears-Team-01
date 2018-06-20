import React, { Component } from 'react';

export default class userCarousel extends Component {
  render() {
    return (
      <div className="userCarousel">
        <div className="user-carousel-title">
          <h3>Your Owned Books</h3>
        </div>
        <div className="user-carousel-image-container">
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/51mH3zO0b2L._SX379_BO1,204,203,200_.jpg"
            alt="test"
          />
        </div>
      </div>
    );
  }
}
