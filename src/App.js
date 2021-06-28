import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";

import { HashRouter, Route, Switch, Link } from "react-router-dom";
import "./bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <HashRouter>
      <Route exact path="/" component={Home}></Route>
    </HashRouter>
  );
}

export default App;
