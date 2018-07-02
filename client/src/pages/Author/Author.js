import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";

class Author extends Component {
  state = {
    user: {}
  };
  // When this component mounts, grab the post with the id of this.props.match.params.id
  // e.g. localhost:3000/posts/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getPost(this.props.match.params.id)
      .then(res => this.setState({ user: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
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
