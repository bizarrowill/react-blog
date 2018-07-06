import axios from "axios";

export default {
  // Gets all posts
  getPosts: function() {
    return axios.get("https://jsonplaceholder.typicode.com/posts");
  },
  // Gets the post with the given id
  getPost: function(id) {
    return axios.get("https://jsonplaceholder.typicode.com/posts/" + id);
  },
  // Gets the author with the given id
  getAuthor: function(id) {
    return axios.get("https://jsonplaceholder.typicode.com/users/" + id);
  },

  // Gets comments
  getComments: function() {
    return axios.get("https://jsonplaceholder.typicode.com/comments");
  },

  // Gets photos
  getPhotos: function() {
    return axios.get("https://jsonplaceholder.typicode.com/photos");
  },

  // Saves a post to the database
  newPost: function(newPost) {
    return axios.post("https://jsonplaceholder.typicode.com/posts/", newPost);
  }
};
