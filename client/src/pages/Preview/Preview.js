import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import Comments from "../../components/Comments";
import API from "../../utils/API";

class Preview extends Component {
  state = {
    post: {}
  };
  // When this component mounts, grab the post with the id of this.props.match.params.id
  // e.g. localhost:3000/posts/1
  componentDidMount() {
    API.getPost(this.props.match.params.id)
      .then(res => this.setState({ post: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>{this.state.post.title}</h1>
            </Jumbotron>
            <h3>
              by: <Link to="/author">{this.state.post.userId}</Link>
            </h3>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Content</h1>
              <p>{this.state.post.body}</p>
            </article>
          </Col>
        </Row>
        <Comments />
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
        <br />
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Home</Link>
          </Col>
        </Row>
        <br />
      </Container>
    );
  }
}

export default Preview;
