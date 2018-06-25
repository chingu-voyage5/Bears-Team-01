import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentUser, logoutUser } from './actions/authActions';
import { getUserBooks } from './actions/bookActions';
import setAuthToken from './utils/setAuthToken';
import jwt_decode from 'jwt-decode';
// import { Provider } from 'react-redux';
import Header from './components/Header/Header';
import Recommender from './components/Recommender/Recommender';
import Landing from './components/Landing/Landing';
import UserProfile from './components/UserProfile/UserProfile';

import './App.css';

class App extends Component {
  componentDidMount() {
    // this.props.setCurrentUser(jwt_decode(localStorage.getItem('jwtToken')));
    if (localStorage.jwtToken) {
      setAuthToken(localStorage.jwtToken);
      const decoded = jwt_decode(localStorage.jwtToken);
      this.props.store.dispatch(setCurrentUser(decoded));
      this.props.store.dispatch(getUserBooks());
      const currentTime = Date.now() / 1000;
      if (decoded.exp < currentTime) {
        this.props.store.dispatch(logoutUser());
      }
    }
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <Route exact path="/" component={Recommender} />
          <Route exact path="/landing" component={Landing} />
          <Route exact path="/profile" component={UserProfile} />
        </div>
      </Router>
    );
  }
}

export default connect(
  null,
  { setCurrentUser }
)(App);
