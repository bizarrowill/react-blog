import React, { Component } from "react";
import { Container } from "../../components/Grid";
// import API from "../../utils/API";

class NewComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

    const comment = {
      body: this.state.body
    };
  }

  render() {
    return (
      <Container fluid>
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

export default NewComment;
