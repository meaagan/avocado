import React from 'react';
import mapboxgl from 'mapbox-gl';
import './mapstyles.css'
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1IjoibWVhYWdhbiIsImEiOiJja2g1Z3hiZnIwMzU1MzJudmkxY3JnbWZiIn0.yRbsZEf5QVhAWabaMjQpDQ';

class AMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: -73.824197, 
      lat: 45.429170,
      zoom: 16.5
    };
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
        container: this.mapContainer,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [this.state.lng, this.state.lat],
        zoom: this.state.zoom
    });

    map.on('move', () => {
        this.setState({
            lng: map.getCenter().lng.toFixed(4),
            lat: map.getCenter().lat.toFixed(4),
            zoom: map.getZoom().toFixed(2)
        });
    });

    const geojson = {
        type: 'FeatureCollection',
        features: [{
          type: 'Feature',
          geometry: {
              type: 'Point',
              coordinates: [this.state.lng, this.state.lat]
          },
          properties: {
              title: 'Avocado Sushi du Village',
              description: '270 Bord-du-Lac, Pointe-Claire'
          }
        }]
    };

    geojson.features.forEach(function(marker) {
        const el = document.createElement('div');
        el.className = 'marker';

        new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .addTo(map);
    });
  }

  render() {
    return (
        <div>
        <div ref={el => this.mapContainer = el} className='mapContainer' />
        </div>
    )
  }
}

export default AMap 
