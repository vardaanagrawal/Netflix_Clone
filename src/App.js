import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Movies from "./Movies";
import Tv from "./Tv";
import Navbar from "./Navbar.js";
import Trailer from "./Trailer.js";
import "./App.css";

export default function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/movies">
            <Movies />
          </Route>
          <Route path="/tv">
            <Tv />
          </Route>
          <Route path="/trailer">
            <Trailer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
