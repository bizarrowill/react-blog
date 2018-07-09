import React, { Component } from "react";
import { compose, withProps } from "recompose";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
// import { Map } from "../../components/Map";
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

class Author extends Component {
  state = {
    author: {}
  };
  // When this component mounts, grab the user with the id of this.props.match.params.id
  // e.g. localhost:3000/author/1

  componentDidMount() {
    this.loadAuthor();
  }

  loadAuthor = () => {
    console.log("author id:", this.props.match.params.id);
    API.getAuthor(this.props.match.params.id)
      .then(res =>
        this.setState({
          author: res.data
        })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          {Object.keys(this.state.author).length > 0 ? (
            <List>
              <ListItem>
                <GoogleMap
                  defaultZoom={3}
                  defaultCenter={{
                    lat: -37.3159,
                    lng: 81.1496
                  }}
                >
                  <Marker
                    position={{
                      lat: -37.3159,
                      lng: 81.1496
                    }}
                  />
                </GoogleMap>
                LAT {this.state.author.address.geo.lat} | LONG{" "}
                {this.state.author.address.geo.lng}
              </ListItem>
            </List>
          ) : (
            <h3>Author location does not exist.</h3>
          )}

          <h1>Author Page</h1>
        </Row>
        <Col size="sm-12">
          {Object.keys(this.state.author).length > 0 ? (
            <List>
              <ListItem>
                <strong>{this.state.author.name}</strong>
                <br />
                {this.state.author.username}
                <br />
                {this.state.author.email}
                <br />
                {this.state.author.address.street}
                <br />
                {this.state.author.address.suite}
                <br />
                {this.state.author.address.city} |
                {this.state.author.address.zipcode} |
                {this.state.author.address.geo.lat} |
                {this.state.author.address.geo.lng} |
                <br />
                {this.state.author.phone}
                <br />
                {this.state.author.website}
                <br />
                {this.state.author.company.name} |
                {this.state.author.company.catchPhrase} |
                {this.state.author.company.bs}
              </ListItem>
            </List>
          ) : (
            <h3>Author does not exist.</h3>
          )}
        </Col>
      </Container>
    );
  }
}

export default compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyDH-x4BSPWpRzYjUEpubsuDp1LioaiZp-4&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(Author);
