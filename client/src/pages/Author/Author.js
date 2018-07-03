import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";

class Author extends Component {
  state = {
    authors: []
  };
  // When this component mounts, grab the user with the id of this.props.match.params.id
  // e.g. localhost:3000/author/1
  componentDidMount() {
    API.getAuthors(this.props.match.params.userId)
      .then(res => this.setState({ authors: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Jumbotron>
            <h1>{this.state.authors.name}</h1>
          </Jumbotron>
        </Row>
        <Row>
          <Col size="sm-12">{this.state.authors.name}</Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Home</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Author;
