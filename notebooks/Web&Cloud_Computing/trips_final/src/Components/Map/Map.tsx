import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
  width: '500px',
  height: '500px'
};

export class MapContainer extends Component<{google:any}>{  
  render() {
    return (
      <Map
        google={this.props.google}
        // zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: -1.2884,
            lng: 36.8233
          }
        }
      >
      {/* <Marker onClick={this.onMarkerClick}
                            title={`Location of ...`} />*/}
      </Map> 
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBwl8qOGbD_LXlsiRTFQYDd-2TG0zQkFlk'
})(MapContainer);
