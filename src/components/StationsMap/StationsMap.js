import React, {Component} from 'react';
import { Map, TileLayer } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-markercluster';

const DEFAULT_LAT =  39.5;
const DEFAULT_LNG = -98.35;
const DEFAULT_ZOOM = 4;

class StationsMap extends Component {

  state = {
    stations: this.props.stations,
    lat: DEFAULT_LAT,
    lng: DEFAULT_LNG,
    zoom: DEFAULT_ZOOM
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      stations: nextProps.stations, 
      zoom: DEFAULT_ZOOM, 
      lat: DEFAULT_LAT, 
      lng: DEFAULT_LNG
    })
  }

  getPopup(station) {
  return (`
    <div>
      <b>${station.name}</b>
      <p>${station.street_address}, ${station.city}, ${station.state}</p>
      <b>Status: ${station.status}</b>
    </div>
  `);
  }

  handleZoom = (event) =>{
    const zoom =  event.target.getZoom();
    const lat = event.target.getCenter().lat;
    const lng = event.target.getCenter().lng;

    this.setState({
      zoom, lat, lng
    })
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
        maxZoom={18}
        onZoomEnd={this.handleZoom}>
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