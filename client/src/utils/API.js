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
  getAuthors: function() {
    return axios.get("https://jsonplaceholder.typicode.com/users/");
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
  addPost: function(addPost) {
    return axios.post("https://jsonplaceholder.typicode.com/posts/", addPost);
  }
};
