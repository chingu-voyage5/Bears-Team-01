import React, { Component } from 'react';
import Login from './Login';
import Register from './Register';

import './header.css';

export default class Header extends Component {
  render() {
    return (
      <nav className="header">
        <h1 className="logo">WhatsNext.Fun</h1>
        <div className="btn-group">
          <Login />
          <Register />
        </div>
      </nav>
    );
  }
}
