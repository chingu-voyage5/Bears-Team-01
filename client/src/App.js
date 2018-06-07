import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { Provider } from 'react-redux';

import Header from './components/Header';
import Recommender from './components/Recommender';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Route path="/" component={Header} />
          <Route exact path="/" component={Recommender} />
        </div>
      </Router>
    );
  }
}

export default App;
