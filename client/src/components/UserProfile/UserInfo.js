import React, { Component } from 'react';
import { connect } from 'react-redux';
import './profile.css';

class UserInfo extends Component {
  render() {
    const { user } = this.props.auth;
    return (
      <div className="UserInfo">
        <h1 className="userH1">Contact Information</h1>
        <div className="row">
          <div className="col-md-6">
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
          </div>
          <div className="col-md-6">
            <button className="btn btn-warning">Change Password</button>
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
