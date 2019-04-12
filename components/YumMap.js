import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import keys from '../config/keys';



const Marker = props => {
  return <img className="marker" src="../static/yumnumMarker.svg" />
}

const YumMap = () => {
  
  const center = {
      lat: 5.53, 
      lng: -87.07
    } 
    
  const zoom = 13
  
  
  
    return (
      <div id="map" style={{height: "80vh", width: "100%", padding: "0", margin: "10vh 0 0 0", textAlign: "center"}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: keys.mapKey }}
          defaultCenter={center}
          defaultZoom={zoom}
          
        >
          <Marker
            lat={5.532547}
            lng={-87.071993}
            text="YumNums (may need a boat)"
          />
        </GoogleMapReact>
      </div>
    );
  
}

export default YumMap;