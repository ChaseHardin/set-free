import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HeaderNavbarComponent from './HeaderNavbar/HeaderNavbarComponent';
import HomeComponent from './Home/HomeComponent';
import ScoreComponent from './Score/ScoreComponent';
import BottomNavBarComponent from './BottomNavbar/BottomNavbarComponent';
import ProfileComponent from './Profile/ProfileComponent';
import LoginComponent from './Login/LoginComponent';

import firebase from './Config/fbConfig';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className='app-styles'>
          {this.state.user ? <HeaderNavbarComponent /> : <LoginComponent />}

          <Switch>
            <Route exact path='/' component={HomeComponent}></Route>
            <Route path="/score" component={ScoreComponent}></Route>
            <Route path="/profile" component={ProfileComponent}></Route>
          </Switch>

          <BottomNavBarComponent />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
