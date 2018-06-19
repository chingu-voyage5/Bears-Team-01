import React, { Component } from 'react';
import UserOwns from './UserOwns';
import UserCarosel from './UserCarosel';
import UserInfo from './UserInfo';
import UserRecommended from './UserRecommended';

class UserProfile extends Component {
  render() {
    return (
      <div className="userProfile">
        <div className="profile-top-container">
          <div className="profile-left-column">
            <UserOwns />
          </div>
          <div className="profile-right-column">
            <UserInfo />
            <UserRecommended />
          </div>
        </div>
        <div className="profile-bottom-container">
          <UserCarosel />
        </div>
      </div>
    );
  }
}

export default UserProfile;
