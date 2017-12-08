import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import legacy from 'rollup-plugin-legacy';

const config = {
  input: 'UTFGrid.js',
  output: {
    file: 'dist/UTFGrid.js',
    format: 'umd',
    name: 'ReactLeafletUTFGrid',
  },
  globals: {
    'prop-types': 'PropTypes',
    'react-leaflet': 'ReactLeaflet',
    'leaflet-utfgrid': 'L.utfGrid',
  },
  external: ['prop-types', 'react-leaflet', 'leaflet-utfgrid'],
  plugins: [
    nodeResolve(),
    babel({
      exclude: '**/node_modules/**',
    }),
    commonjs(),
    legacy({
      'leaflet-utfgrid': {
        utfGrid: 'L.utfGrid',
      },
    }),
  ],
};

export default config;
