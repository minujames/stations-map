import React, { Component } from 'react'
import API from '../../utils/API';
import StationsMap from "../StationsMap"

const DEFAULT_STATION_FILTER = "all";

class Stations extends Component {
 
  state = {
    stations : [],
    status: DEFAULT_STATION_FILTER
  }

  componentDidMount(){
    const status = this.getStationStatus(this.props); 

    API.getStations()
    .then(res => {
      this.setState({stations: res.data,
        status });
    })
    .catch(err => console.log(err));
  }

  componentWillReceiveProps(nextProps){
    const status = this.getStationStatus(nextProps);
    this.setState({status})
  }

  getStationStatus(propsObj){
    let status = propsObj.match.params.status;
    status = status ? status.replace(/-/g, " "): DEFAULT_STATION_FILTER;

    return status;
  }

  getStationsByStatus(){
    if(this.state.status === DEFAULT_STATION_FILTER){
      return this.state.stations;
    }
    else {
      return this.state.stations.filter(station => (
        station.status === this.state.status
      ));
    }
  }

  render(){
    if(!this.state.stations.length){
      return <div className="conatiner">loading...</div>
    }
    else{
      return (
        <div className="map-wrapper">
          <StationsMap stations={this.getStationsByStatus()}/>
        </div>
      );
    }
  }
}

export default Stations;