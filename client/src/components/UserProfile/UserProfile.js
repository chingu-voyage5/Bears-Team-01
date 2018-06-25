import React, { Component } from 'react';
import UserOwns from './UserOwns';
import UserCarousel from './UserCarousel';
import UserInfo from './UserInfo';
import UserRecommended from './UserRecommended';
import './profile.css';
import { connect } from 'react-redux';

class UserProfile extends Component {
  render() {
    const { user } = this.props.auth;
    return (
      <div className="userProfile">
        <div className="profile-top-container">
          <div className="profile-left-column">
            <UserOwns />
          </div>
          <div className="profile-right-column">
            <UserInfo user={user} />
            <UserRecommended />
          </div>
        </div>
        <div className="profile-bottom-container">
          <UserCarousel />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps)(UserProfile);
