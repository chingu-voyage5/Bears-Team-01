import React, { Component } from 'react';
import Login from './Login';
import Register from './Register';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import './header.css';

class Header extends Component {
  logOut = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    const { isAuthenticated, user } = this.props.auth;
    const notLoggedIn = (
      <div className="btn-group">
        <Login />
        <Register />
      </div>
    );
    const loggedIn = (
      <div className="btn-group">
        <button className="btn btn-danger" onClick={this.logOut}>
          Log Out
        </button>
      </div>
    );

    return (
      <nav className="header">
        <h1 className="logo">WhatsNext.Fun</h1>
        {isAuthenticated ? loggedIn : notLoggedIn}
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Header);
