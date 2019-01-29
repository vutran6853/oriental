import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import css from './mapContainer.scss';

class MapContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      coordinates: [],
      placeName: [],
      placeAddress: [],
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      style: { width: '50%', height: '50%' }
    }

    this.handeleOnMarkerClick = this.handeleOnMarkerClick.bind(this);
  }

  handeleOnMarkerClick(props, marker, e) {
    // console.log(`this.props:`, props);
    // console.log('marker::', marker);
    // console.log(`props:: ${ props }`);
    this.setState({ selectedPlace: props, activeMarker: marker, showingInfoWindow: true });
  }

  handeleOnMapClicked(props){
    if (this.state.showingInfoWindow) {
      this.setState({ showingInfoWindow: false, activeMarker: null })
    }
  };

  handelePlaceAddress() {
    let { display_address: address } = this.props.data.location
    this.setState({ placeAddress: address })
  }

 render() {
    return (
      <div className='mapContainerBox' >
        <Map google={ this.props.google }
                  // style={ this.state.style }
                  initialCenter={ { lat: 36.572411, lng: -79.418602 } }
                  zoom={ 15 } 
                  className='mapCointainerInnterBox'>
            
          <Marker title='Oriental Nails'
                  name='Oriental Nails'
                  position={ { lat: 36.572411, lng: -79.418602 } } 
                  onClick={ this.handeleOnMarkerClick }
          />

          <InfoWindow marker={ this.state.activeMarker } visible={ this.state.showingInfoWindow }>
              <h3>Oriental Nails</h3>
              <h3>639 W Main St, Danville, VA 24541</h3>
              <h3>Phone: 434-421-2378</h3>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({ apiKey: process.env.REACT_APP_GOOGLE_KEY })(MapContainer)