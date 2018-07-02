import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";

export default class Author extends Component {
  state = {
    author: []
  };
  // When this component mounts, grab the Author with the id of this.props.match.params.Postid
  // e.g. localhost:3000/Author/1
  componentDidMount() {
    this.loadAuthor();
  }

  loadAuthor = () => {
    API.getAuthor()
      .then(res => this.setState({ author: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return;
    <Col size="sm-12">{this.state.author.name}</Col>;
  }
}
