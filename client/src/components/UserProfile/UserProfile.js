import React, { Component } from 'react';
import UserOwns from './UserOwns';
import UserCarosel from './UserCarosel';
import UserInfo from './UserInfo';
import UserRecommended from './UserRecommended';

class UserProfile extends Component {
  render() {
    return (
      <div className="UserProfile">
        <div className="container userContainer">
          <div className="row">
            <div className="col-md-4 userLeftColumn">
              <UserOwns />
            </div>
            <div className="col-md-8 userRightColumn">
              <div className="row">
                <div className="col-md-12 userInfo">
                  <UserInfo />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 userRecommended">
                  <UserRecommended />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 userCarosel">
              <UserCarosel />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
