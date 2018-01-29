import React, { Component } from 'react'
import API from '../../utils/API';

import StationsMap from "../StationsMap"
// import {STATUS_ALL, STATUS_ACTIVE, STATUS_UNDER_CONSTRUCTION, STATUS_NEEDS_SERVICE} 
//   from '../../utils/Constants';

class Stations extends Component {
 
  state = {
    stations : [],
    status: "all"
  }

  componentDidMount(){
    API.getStations()
    .then(res => {
      this.setState({stations: res.data});
    })
    .catch(err => console.log(err));
  }

  componentWillReceiveProps(nextProps){
    const status = nextProps.match.params.status.replace(/_/g, " ");
    console.log(status);
    this.setState({status})
  }

  getStationsByStatus(){
    console.log(this.state.status);
    if(this.state.status === "all"){
      return this.state.stations;
    }
    else {
      const filteredStations = this.state.stations.filter(station => (
        station.status === this.state.status
      ));
      return filteredStations;
    }
  }

  render(){
    if(!this.state.stations.length){
      return <div className="map-wrapper">loading...</div>
    }
    else{
      return (
        <div className="map-wrapper">
         { this.state.stations.length && <StationsMap stations={this.getStationsByStatus()}/>}
        </div>
      );
    }
  }
}

export default Stations;