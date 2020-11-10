
import * as React from 'react';
import { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './mapstyles.css'

const TOKEN = 'pk.eyJ1IjoibWVhYWdhbiIsImEiOiJja2g1Z3hiZnIwMzU1MzJudmkxY3JnbWZiIn0.yRbsZEf5QVhAWabaMjQpDQ';

function AMap() {
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: -73.824200,
    longitude: 45.429166,
    zoom: 17
  });

  return (
    <ReactMapGL
      mapboxApiAccessToken={TOKEN}
      {...viewport}
      height="100%"
      width="100%"
      onViewportChange={nextViewport => setViewport(nextViewport)}
    />
  );
}

export default AMap 