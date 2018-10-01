import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavbarComponent from './Menu/NavbarComponent';

class App extends Component {
  render() {
    return (
      <div className='app-styles'>
        <NavbarComponent />
      </div>
    );
  }
}

export default App;
