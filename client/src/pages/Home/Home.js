import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";

class Home extends Component {
  state = {
    posts: [],
    photos: []
  };

  componentDidMount() {
    this.loadPosts();
    this.loadPhotos();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }

  loadPosts = () => {
    API.getPosts()
      .then(res => this.setState({ posts: res.data }))
      .catch(err => console.log(err));
  };

  loadPhotos = () => {
    API.getPhotos()
      .then(res => {
        this.setState({ photos: res.data });
      })

      .catch(err => console.log(err));
  };

  render() {
    // console.log(this.state);
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Welcome to the React Blog</h1>
            </Jumbotron>
            <Col size="sm-12">
              {this.state.posts.length ? (
                <List>
                  {this.state.posts.map((post, index) => {
                    const photo = this.state.photos[index];
                    return (
                      <ListItem key={post.id}>
                        {photo && <img src={photo.thumbnailUrl} alt="" />}
                        <strong>{post.title.slice(0, 15)}</strong>
                        <br />
                        {post.body.slice(0, 30)}
                        post <Link to={"/posts/" + post.id}>Read More</Link>
                      </ListItem>
                    );
                  })}
                </List>
              ) : (
                <h3>Posts Loading or no new posts</h3>
              )}
            </Col>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
