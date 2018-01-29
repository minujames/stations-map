import React from 'react';
import { Map, TileLayer, Popup } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-markercluster';


const StationsMap = ({stations}) => {
  if(!stations){
    return <div>loading...</div>
  }

  const center = [39.5, -98.35];
  const zoom = 4;

  const  markers = stations.map(station => (
     {position: [station.location.coordinates[1], station.location.coordinates[0]]}
  ));

  return (
    <Map className="markercluster-map" center={center} zoom={zoom} minZoom={zoom}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      <MarkerClusterGroup markers={markers} />
    </Map>
  );
}

export default StationsMap;