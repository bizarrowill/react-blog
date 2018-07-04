import React, { Component } from "react";
import { Col, Row } from "../../components/Grid";
import API from "../../utils/API";

export default class Author extends Component {
  state = {
    author: {}
  };
  // When this component mounts, grab the Author with the id of this.props.match.params.Postid
  // e.g. localhost:3000/Author/1
  componentDidMount() {
    API.getAuthor(this.props.match.params.id)
      .then(res => this.setState({ author: res.data }))
      .catch(err => console.log(err));
  }

  loadAuthor = () => {};

  render() {
    return;
    <Row>
      <Col size="sm-12">{this.state.author.name}</Col>
    </Row>;
  }
}
