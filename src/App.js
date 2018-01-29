import React from 'react';
import './App.css';
// import API from './utils/API';
// import Constants from './utils/Constants';

// import StationsMap from "./components/StationsMap"

import Header from './components/Header';
import Stations from './components/Stations';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



const App = () =>  

  <Router>
      <div className="main-wrapper">
        <Header/>
        <Switch>
          <Route exact path= {process.env.PUBLIC_URL + "/"} component={Stations} />
          <Route exact path= {process.env.PUBLIC_URL + "/stations/:status"} component={Stations} />
        </Switch>
      </div>
  </Router>

  // state = {
  //   stations: [],
  //   status: Constants.STATUS_ALL
  // }

  // componentDidMount(){
  //   API.getStations()
  //   .then(res => {
  //     this.setState({stations: res.data});
  //   })
  //   .catch(err => console.log(err));
  // }

  // render() {
    
  //   return (
  //     <div className="main-wrapper">
  //       <Header/>

  //       {this.state.stations.length ? 
  //         <div className="map-wrapper">
  //           <StationsMap 
  //           stations={this.state.stations}/>}
  //         </div> :
  //         <div>loading...</div>
  //       }
  //     </div>
  //   );
  // }
// }

export default App;
