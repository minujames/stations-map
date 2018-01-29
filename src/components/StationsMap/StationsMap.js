import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'


const StationsMap = ({stations}) => {
  if(!stations){
    return <div>loading...</div>
  }

  const center = [39.5, -98.35];
  const zoom = 4;

  const stationMarkers = stations.map(station => (
    <Marker 
      position={[station.location.coordinates[1], station.location.coordinates[0]]} 
      key={station.id}>
      <Popup>
        <span>{station.name}</span>
      </Popup>
    </Marker>
  ));

  return (
    <Map center={center} zoom={zoom} minZoom={zoom}>
      <TileLayer
        attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {stationMarkers}
    </Map>
  );
}

export default StationsMap;