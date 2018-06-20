import React, { Component } from 'react';

export default class UserRecommended extends Component {
  render() {
    return (
      <div className="userRecommended">
        <div className="user-recommended-title">
          <h3>We Recommend....</h3>
        </div>
        <div className="user-recommended-container">
          <div className="user-image-container">
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/51mvaK65SKL._SX376_BO1,204,203,200_.jpg"
              alt=""
            />
          </div>
          <div className="user-summary-container">
            <div className="user-recommended-title user-r">
              <h4>Title</h4>
              Harry Potter and the Sorcerer's Stone
            </div>
            <div className="user-recommended-author user-r">
              <h4>Author</h4>
              J.K. Rowling
            </div>
            <div className="user-recommended-rating user-r">
              <h4>Rating</h4>
              5 stars
            </div>
            <div className="user-recommended-description user-r">
              <h4>Description</h4>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
