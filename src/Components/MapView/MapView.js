import React, { Component } from "react";
import "./mapView.css";
// import GoogleApiWrapper from "../../utilities/apiCalls";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

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

export class MapContainer extends Component {
    constructor(){
        super()
          this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
          };
    }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  _mapLoaded(mapProps, map) {
    map.setOptions({
      styles: mapStyle,
    });
  }

  render() {
    return (
      <section id="map-container">
        <Map
          style={{ width: "60vw", height: "50vh", position: "inherit" }} // id="map-container"
          google={this.props.google}
          zoom={this.state.zoom}
          initialCenter={this.state.center}
          onReady={(mapProps, map) => this._mapLoaded(mapProps, map)}
          google={this.props.google}
          onClick={this.onMapClicked}
        >
          <Marker onClick={this.onMarkerClick} name={"Current location"} />

          {/* <InfoWindow
          onOpen={this.windowHasOpened}
          onClose={this.windowHasClosed}
          visible={this.state.showingInfoWindow}
        >
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
        </InfoWindow> */}
        </Map>
      </section>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyCMkt4nZU-9Wmu0t5nQMu_xgCD_3d8QF_M",
})(MapContainer);
