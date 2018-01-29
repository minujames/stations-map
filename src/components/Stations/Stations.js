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

    let status = this.props.match.params.status; 
    status = status ? this.getStationStatus(status): "all";

    API.getStations()
    .then(res => {
      this.setState({stations: res.data,
        status });
    })
    .catch(err => console.log(err));
  }

  getStationStatus(pathParam){
    return pathParam.replace(/-/g, " ");
  }

  componentWillReceiveProps(nextProps){

    const status = nextProps.match.params.status ? 
      this.getStationStatus(nextProps.match.params.status) : "all";
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