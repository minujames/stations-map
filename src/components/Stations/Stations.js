import React, { Component } from 'react'
import API from '../../utils/API';

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
      <div className="container">
      {
        this.state.stations.map(station => (
          <p key={station.id}>{station.name}</p>
        ))
      }
      </div>
    );
  }

}

export default Stations;