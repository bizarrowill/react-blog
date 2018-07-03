import React, { Component } from "react";
import { Col, Container } from "../../components/Grid";
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";

export default class Comments extends Component {
  state = {
    comments: []
  };
  // When this component mounts, grab the comments with the id of this.props.match.params.Postid
  // e.g. localhost:3000/comments/1
  componentDidMount() {
    this.loadComments();
  }

  loadComments = () => {
    API.getComments()
      .then(res => this.setState({ comments: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Col size="sm-12">
          {this.state.comments.length ? (
            <List>
              {this.state.comments
                .slice(0, 5)
                .map(comment => (
                  <ListItem key={comment.id}>{comment.body}</ListItem>
                ))}
            </List>
          ) : (
            <h3>No Results to Display</h3>
          )}
        </Col>
      </Container>
    );
  }
}
