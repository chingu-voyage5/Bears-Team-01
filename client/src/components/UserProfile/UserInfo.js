import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserInfo extends Component {
  render() {
    const { user } = this.props.auth;
    return (
      <div className="userInfo">
        <div className="user-info-title">
          <h3>Contact Information</h3>
        </div>
        <div className="user-info-container">
          <div className="user-info-left">
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
          </div>
          <div className="user-info-right">
            <button>Change Password</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps)(UserInfo);
