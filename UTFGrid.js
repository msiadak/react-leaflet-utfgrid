import PropTypes from 'prop-types';
import { TileLayer } from 'react-leaflet';
import { utfGrid } from 'leaflet-utfgrid';

export default class UTFGrid extends TileLayer {
  static propTypes = {
    url: PropTypes.string.isRequired,
    resolution: PropTypes.number,
    pointerCursor: PropTypes.bool,
    maxRequests: PropTypes.number,
    mouseInterval: PropTypes.number,
  };

  static defaultProps = {
    resolution: 4,
    pointerCursor: true,
    mouseInterval: 66,
  };

  createLeafletElement({ url, ...otherProps }) {
    return utfGrid(url, { ...otherProps });
  }

  updateLeafletElement(fromProps, toProps) {
    super.updateLeafletElement(fromProps, toProps);
    if (fromProps.url !== toProps.url) {
      this.leafletElement.setUrl(url, false);
    }
  }
}
