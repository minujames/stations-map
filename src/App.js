import React from 'react';
import './App.css';
import Header from './components/Header';
import Stations from './components/Stations';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () =>  

  <Router>
    <div className="main-wrapper">
      <Header/>
      <Switch>
        <Route exact path= {process.env.PUBLIC_URL + "/"} component={Stations} />
        <Route exact path= {process.env.PUBLIC_URL + "/:status"} component={Stations} />
      </Switch>
    </div>
  </Router>

export default App;
