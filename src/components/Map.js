import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Map extends React.Component {
  componentDidMount() {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiY3JvZWJlciIsImEiOiJjazJxM3pwcHUwYjRkM2lzMzNkaGlvbzcwIn0.XJgFka4vp2fIuWe-BoWt5w";
    var map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11"
    });
  }

  render() {
    return (
      <div>
        <section className="row" id="map-row">
          <section className="col-12"></section>
          <section className="col-12">
            <input
              id="pac-input"
              className="form-control"
              type="text"
              placeholder="Search Homes"
            />
            <div id="map" ></div>
          </section>
          <section className="col-12"></section>
        </section>
      </div>
    );
  }
}

export default Map;
