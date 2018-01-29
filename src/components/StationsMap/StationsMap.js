import React, {Component} from 'react';
import { Map, TileLayer } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-markercluster';


class StationsMap extends Component {

  state = {
    stations: this.props.stations,
    lat: 39.5,
    lng: -98.35,
    zoom: 4
  }

  componentDidMount(){
    console.log(this.props)
  }

  componentWillReceiveProps(nextProps){
    this.setState({stations: nextProps.stations})
  }

  getPopup(station) {
  return (`
    <div>
      <b>${station.name}</b>
      <p>${station.street_address}, ${station.city}</p>
      <p>${station.state}</p>
      <b>Status: ${station.status}</b>
    </div>
  `);
  }

  render() {
    const center = [this.state.lat, this.state.lng];

    const  markers = this.state.stations.map(station => (
       {position: [station.location.coordinates[1], station.location.coordinates[0]],
        popup: this.getPopup(station)}
    ));

    return (
      <Map 
        className="markercluster-map" 
        center={center} 
        zoom={this.state.zoom} 
        minZoom={this.state.zoom}
        maxZoom={18}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <MarkerClusterGroup markers={markers} />
      </Map>
    );
  }
}

export default StationsMap;