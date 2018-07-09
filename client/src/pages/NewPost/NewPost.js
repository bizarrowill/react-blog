import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newPost = {
      title: this.state.title,
      body: this.state.body
    };

    API.newPost(newPost)
      .then(res => this.setState({ post: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <div>
          <h1>Add Post</h1>
          <form onSubmit={this.onSubmit}>
            <div>
              <label>Title: </label>
              <br />
              <input
                type="text"
                name="title"
                onChange={this.onChange}
                value={this.state.title}
              />
            </div>
            <br />
            <div>
              <label>Body: </label>
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
            <Link to={"/"}>
              <button type="submit">Submit</button>
            </Link>
          </form>
        </div>
        <br />
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Home</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default NewPost;
