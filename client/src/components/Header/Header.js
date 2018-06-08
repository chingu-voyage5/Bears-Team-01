import React, { Component } from 'react';
import Login from './Login';

export default class Header extends Component {
  render() {
    return (
      <nav className="header">
        <h1 className="logo">WhatsNext.Fun</h1>
        <Login />
      </nav>
    );
  }
}
