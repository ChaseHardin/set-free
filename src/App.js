import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavbarComponent from './Menu/NavbarComponent';
import HomeComponent from './Home/HomeComponent';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='app-styles'>
          <NavbarComponent />
          <Switch>
            <Route path='/' component={HomeComponent}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
