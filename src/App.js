import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HeaderNavbarComponent from './HeaderNavbar/HeaderNavbarComponent';
import HomeComponent from './Home/HomeComponent';
import ScoreComponent from './Score/ScoreComponent';
import BottomNavBarComponent from './BottomNavbar/BottomNavbarComponent';
import ProfileComponent from './Profile/ProfileComponent';
import Login from './Login/Login';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='.app-styles'>
          <HeaderNavbarComponent />
          
          <div className='container-fluid'>
            <Login />
          </div>

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
