import React, { Component } from "react";
import "./mapView.css";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends Component {
  constructor() {
    super();
    this.state = {
      showingInfoWindow: true,
      activeMarker: {},
      selectedPlace: {},
      zoom: 18,
      coords: { lat: -21.80507955432942, lng: -49.090712070465095 },
    };
  }

  showPosition = (position) => {
    let lat = position.coords.latitude;
    let lng = position.coords.longitude;
    let currCoords = { lat, lng };
    this.setState({
      coords: currCoords,
    });
  };

  getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
      this.setState({
        coords: { lat: -21.80507955432942, lng: -49.090712070465095 },
      });
      Window.alert("Enable location access to utilize this feature.");
    }
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: true,
        activeMarker: null,
      });
    }
  };

  _mapLoaded(mapProps, map) {
    map.setOptions({
      styles: mapStyle,
      mapTypeId: "satellite",
    });
  }

  render() {
    return (
      <section id="map-container">
        <Map
          style={{
            width: "60vw",
            height: "55vh",
            position: "inherit",
            borderRadius: "15px",
          }}
          zoom={this.state.zoom}
          initialCenter={this.state.coords}
          onReady={(mapProps, map) => this._mapLoaded(mapProps, map)}
          google={this.props.google}
          onClick={this.onMapClicked}
        >
          <Marker onClick={this.onMarkerClick} name={"Current location"} />

          <InfoWindow
            onOpen={this.windowHasOpened}
            onClose={this.windowHasClosed}
            visible={this.state.showingInfoWindow}
          >
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>
        </Map>
      </section>
    );
  }
}

const mapStyle = [
  {
    featureType: "landscape.man_made",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#dceafa",
      },
    ],
  },
];

export default GoogleApiWrapper({
  apiKey: "AIzaSyCMkt4nZU-9Wmu0t5nQMu_xgCD_3d8QF_M",
})(MapContainer);
