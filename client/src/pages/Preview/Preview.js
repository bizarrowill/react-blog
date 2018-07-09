import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import Comments from "../../components/Comments";
import API from "../../utils/API";

class Preview extends Component {
  state = {
    post: {},
    photos: {}
  };
  // When this component mounts, grab the post with the id of this.props.match.params.id
  // e.g. localhost:3000/posts/1
  componentDidMount() {
    this.loadPhotos();
    API.getPost(this.props.match.params.id)
      .then(post => {
        API.getAuthor(post.data.userId).then(author => {
          this.setState({ post: post.data, author: author.data.name });
        });
      })
      .catch(err => console.log(err));
  }

  loadPhotos = () => {
    API.getPhotos()
      .then(res => {
        this.setState({ photos: res.data });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>{this.state.post.title}</h1>
            </Jumbotron>
            <h3>
              by:{" "}
              <Link to={"/author/" + this.state.post.userId}>
                {this.state.author}
              </Link>
            </h3>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Content</h1>
              {this.state.photos[0] && (
                <img src={this.state.photos[0].url} alt="" />
              )}
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
