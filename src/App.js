import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';

import Header from './components/Header';
import Stations from './components/Stations';

const App = () =>  

  <Router>
    <div className="main-wrapper">
      <Header/>
      <Switch>
        <Route exact path="/" component={Stations} />
        <Route exact path="/:status" component={Stations} />
      </Switch>
    </div>
  </Router>

export default App;
