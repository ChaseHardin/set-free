import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HeaderNavbar from './components/HeaderNavbar/HeaderNavbar';
import Home from './components/Home/Home';
import Score from './components/Score/Score';
import BottomNavbar from './components/BottomNavbar/BottomNavbar';
import Profile from './components/Profile/Profile';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='app-styles'>
          <HeaderNavbar />

          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route path="/score" component={Score}></Route>
            <Route path="/profile" component={Profile}></Route>
          </Switch>

          <BottomNavbar />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
