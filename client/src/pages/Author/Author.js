import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
// import { Map } from "../../components/Map";
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";

class Author extends Component {
  state = {
    authors: [],
    name: "",
    username: "",
    email: "",
    address: ""
  };
  // When this component mounts, grab the user with the id of this.props.match.params.id
  // e.g. localhost:3000/author/1

  componentDidMount() {
    this.loadAuthors();
  }

  loadAuthors = () => {
    API.getAuthors()
      .then(res =>
        this.setState({
          authors: res.data,
          name: "",
          username: "",
          email: "",
          address: ""
        })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Jumbotron>
            <h1>Author Page</h1>
          </Jumbotron>
        </Row>
        <Col size="sm-12">
          {this.state.authors.length ? (
            <List>
              {this.state.authors.slice(0, 1).map(author => (
                <ListItem key={author.id}>
                  <strong>{author.name}</strong>
                  <br />
                  {author.username}
                  <br />
                  {author.email}
                  <br />
                  {author.address.street}
                  <br />
                  {author.address.suite}
                  <br />
                  {author.address.city} |
                  {author.address.zipcode} | LAT:
                  {author.address.geo.lat} | LONG:
                  {author.address.geo.lng}
                  <br />
                  {author.phone}
                  <br />
                  {author.website}
                  <br />
                  {author.company.name} |
                  {author.company.catchPhrase} |
                  {author.company.bs}
                </ListItem>
              ))}
            </List>
          ) : (
            <h3>authors Loading or no new authors</h3>
          )}
        </Col>
      </Container>
    );
  }
}

export default Author;
