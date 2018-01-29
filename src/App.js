import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Stations from './components/Stations';

class App extends Component {
  render() {
    return (
      <div className="main-wrapper">
        <Header/>
        <Stations/>
      </div>
    );
  }
}

export default App;
