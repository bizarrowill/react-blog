import React, { Component } from "react";
import { Col, Container } from "../../components/Grid";
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";

export default class Comments extends Component {
  state = {
    comments: []
  };

  componentDidMount() {
    this.loadComments();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newComment) {
      this.props.comments.unshift(nextProps.newComment);
    }
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
            <h3>No comments to display</h3>
          )}
        </Col>
        <div>
          <h1>Add Comment</h1>
          <form onSubmit={this.onSubmit}>
            <br />
            <div>
              <label>Comment: </label>
              <br />
              <input
                type="text"
                name="body"
                onChange={this.onChange}
                value={this.state.body}
              />
              <br />
            </div>
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      </Container>
    );
  }
}
