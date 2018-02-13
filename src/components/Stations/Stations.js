import React, { Component } from 'react'
import API from '../../utils/API';
import StationsMap from "../StationsMap"

const DEFAULT_STATION_FILTER = "all";

/* Component fetches stations data using Volta API.
It filters stations according to the status and passes down the data to StationsMap. */
class Stations extends Component {
 
  state = {
    stations : [],
    status: DEFAULT_STATION_FILTER
  }

  /* Doing the API call and setting the station status after mounting the component */
  componentDidMount(){
    const status = this.getStationStatus(this.props); 

    API.getStations()
    .then(res => {

      const stns = res.data.filter((station) => {
        return station.status != 'under construction'
      });

      this.setState({stations: stns,
        status });
    })
    .catch(err => console.log(err));
  }

  /* This will be called when the header station filters are selected */
  componentWillReceiveProps(nextProps){
    const status = this.getStationStatus(nextProps);
    this.setState({status})
  }

  /* Method to extract the station status from the path param */
  getStationStatus(propsObj){
    let status = propsObj.match.params.status;
    status = status ? status.replace(/-/g, " "): DEFAULT_STATION_FILTER;

    return status;
  }

  /* Method to filter the stations list by status */ 
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