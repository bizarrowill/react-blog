import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const Location = ({ text }) => <div>{text}</div>;

class Map extends Component {
  static defaultProps = {
    center: { lat: 40.744679, lng: -73.948542 },
    zoom: 11
  };
  render() {
    return (
      <div className="google-map">
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Location lat={40.747331} lng={-73.851744} text={"Author"} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
