import React, { Component } from 'react'
import API from '../../utils/API';

import StationsMap from "../StationsMap"

class Stations extends Component {
 
  state = {
    stations : []
  }

  componentDidMount(){
    API.getStations()
    .then(res => {
      this.setState({stations: res.data});
    })
    .catch(err => console.log(err));
  }

  render(){
    return (
      <div className="map-wrapper">
        <StationsMap stations={this.state.stations}/>
      </div>
    );
  }

}

export default Stations;