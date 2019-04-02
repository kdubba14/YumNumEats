import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import keys from '../config/keys';

const mapStyle = {
  width: '70%',
  height: '70vh'
}

export class YumMap extends Component {
  
  state={
    center: {
      lat: 5.53, 
      lng: -87.07
    }, 
    zoom: 13
  }
  
  render() {
    return (
      <div id="map" style={{height: "80vh", width: "100%", padding: "0", margin: "10vh 0 0 0", textAlign: "center"}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: keys.mapKey }}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
        >
          <div
            lat={5.532547}
            lng={-87.071993}
            text={'YumNums (may need a boat)'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default YumMap;