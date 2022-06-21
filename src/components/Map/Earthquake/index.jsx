import React from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import Marker from './Marker';
import '../../../leaflet.css';

const ChangeView = ({ center, zoom }) => {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

const QuakeMap = ({ mapData, pos }) => {
  let position = [0, 0];
  let zoom = 2;

  if (pos.length !== 0) { zoom = 10; position = pos; }

  return (
    <MapContainer center={position} zoom={zoom} minZoom={2} worldCopyJump={true}>
      <ChangeView center={position} zoom={zoom} />
      <TileLayer
        //url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />
      {mapData.map((quake, index) => (
        <Marker key={index} quake={quake} index={index} />
      ))}
    </MapContainer>
  )
}

export default QuakeMap