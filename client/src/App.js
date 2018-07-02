import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Preview from "./pages/Preview";
import Author from "./pages/Author";
import NoMatch from "./pages/NoMatch";
import NewPost from "./pages/NewPost";
import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/author" component={Author} />
        <Route exact path="/newpost" component={NewPost} />
        <Route exact path="/posts/:id" component={Preview} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
