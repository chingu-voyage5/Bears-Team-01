import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import { Provider } from 'react-redux';

import Login from './components/login';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Route exact path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
