import React, { Component } from 'react';
import UserOwns from './UserOwns';
import UserRecommender from './UserRecommender';
import UserInfo from './UserInfo';

class UserProfile extends Component {
  render() {
    return (
      <div className="UserProfile">
        <div className="red" />
        <div className="blue" />
        <div className="green" />
        <div className="orange" />
        <div className="yellow" />
      </div>
    );
  }
}

export default UserProfile;
