import React from 'react';
import ReactDOM from 'react-dom';
import { Map } from 'react-leaflet';
import UTFGrid from '../dist/react-leaflet-utfgrid';

const App = () => (
  <Map center={[41, -90]} zoom={9}>
    <UTFGrid url="http://{s}.tiles.mapbox.com/v3/milkator.press_freedom/{z}/{x}/{y}.grid.json" />
  </Map>
);

ReactDOM.render(document.getElementById('root'), <App />);
