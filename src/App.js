import React, { Component } from 'react';
import './App.css';
import {Provider} from 'mobx-react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HeaderNavbar from './components/HeaderNavbar/HeaderNavbar';
import Home from './components/Home/Home';
import Score from './components/Score/Score';
import BottomNavbar from './components/BottomNavbar/BottomNavbar';
import Profile from './components/Profile/Profile';
import Login from './components/Login/Login';
import firebase from './FireBaseConfig';
import stores from './stores';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    this.authenticationListener();
  }

  authenticationListener() {
    firebase.auth().onAuthStateChanged((user) => {
      user ? this.setState({ user }) : this.setState({ user: null })
    });
  }

  renderRoutes = () => {
    return (
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path="/score" component={Score}></Route>
        <Route path="/profile" component={Profile}></Route>
      </Switch>);
  }

  renderAppContents = () => {
    return (
      <div>
        <HeaderNavbar />
        {this.renderRoutes()}
        <BottomNavbar />
      </div>
    )
  }

  render() {
    return (
      <BrowserRouter>
        <Provider store={stores.user}>
          <div className='app-styles'>
            {this.state.user ? this.renderAppContents() : <Login />}
          </div>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
